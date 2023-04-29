import CategoryButton from 'components/CategoryButton'
import Input from 'components/Input'
import * as S from './styles'

import Button from 'components/Button'
import { Controller, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import Header from 'components/Header'
import * as z from 'zod'
import { categories, days } from './mock'

type FormValues = {
  habit: string
  category: string | null
  frequency: string[]
}

const schema = z.object({
  habit: z.string().nonempty({ message: 'Please enter a habit name' }),
  category: z.string().nonempty({ message: 'Please select a category' }),
  frequency: z.array(z.string()).nonempty({
    message: 'Please select a frequency',
  }),
})

type CreateHabitProps = {
  goBack: () => void
}
const CreateHabit = ({ goBack }: CreateHabitProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      habit: '',
      category: '',
      frequency: [],
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  const onCreateHabit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <S.Wrapper>
      <Header title="Create habit" goBack={goBack} />
      <S.Form>
        <S.FormItem>
          <Controller
            name="habit"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Habit name"
                placeholder="Reading the book"
                onChange={(e) => onChange(e.target.value)}
                value={value}
                error={!!errors.habit}
                helperText={errors.habit?.message}
              />
            )}
          />
        </S.FormItem>

        <S.FormItem>
          <S.Label>Select category</S.Label>
          <S.GridList>
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  {categories.map((item) => (
                    <CategoryButton
                      color={item.color}
                      onClick={() => onChange(item.key)}
                      title={item.title}
                      icon={item.icon}
                      key={item.id}
                      isActive={item.key === value}
                      aria-label={`category: ${item.title}`}
                      aria-checked={item.key === value}
                    />
                  ))}
                </>
              )}
            />
          </S.GridList>
          {!!errors.category && (
            <S.HelperTextError>{errors.category.message}</S.HelperTextError>
          )}
        </S.FormItem>
        <S.FormItem>
          <S.Label>Frequency</S.Label>
          <S.GridList>
            <Controller
              name="frequency"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  {days.map((item) => (
                    <S.DayButton
                      onClick={() => {
                        if (value.includes(item.key)) {
                          onChange(value.filter((day) => day !== item.key))
                        } else {
                          onChange([...value, item.key])
                        }
                      }}
                      isActive={value.includes(item.key)}
                      key={item.key}
                      aria-label={`day: ${item.title}`}
                      aria-checked={value.includes(item.key)}
                    >
                      {item.title}
                    </S.DayButton>
                  ))}
                </>
              )}
            />
          </S.GridList>
          {!!errors.frequency && (
            <S.HelperTextError>{errors.frequency.message}</S.HelperTextError>
          )}
        </S.FormItem>
      </S.Form>
      <Button
        width="full"
        size="medium"
        isDisabled={Object.keys(errors).length > 0}
        onClick={handleSubmit(onCreateHabit)}
      >
        Create habit
      </Button>
    </S.Wrapper>
  )
}

export default CreateHabit
