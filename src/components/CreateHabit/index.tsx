import CategoryButton from 'components/CategoryButton'
import Input from 'components/Input'
import * as S from './styles'
import Button from 'components/Button'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Header from 'components/Header'
import * as z from 'zod'
import { useMutation } from '@tanstack/react-query'
import { HabitService } from 'services/habitService'
import { queryClient } from 'services/store/queryClient'
import { categories, days } from './mock'

import FeadbackPopUp, { FeadbackPopUpProps } from 'components/FeadbackPopUp'
import { useRouter } from 'next/router'
import { useState } from 'react'

type FormValues = {
  habit: string
  category: string | null
  frequency: string[]
}

const habitMessage = {
  create: {
    sucess: 'Habit created successfully',
    error: 'Error creating habit',
    loading: 'Creating habit...',
    button: 'Create habit',
    title: 'Create habit',
  },
  edit: {
    sucess: 'Habit edited successfully',
    error: 'Error editing habit',
    loading: 'Editing habit...',
    button: 'Edit habit',
    title: 'Edit habit',
  },
  delete: {
    sucess: 'Habit deleted successfully',
    error: 'Error deleting habit',
    loading: 'Deleting habit...',
    button: 'Delete habit',
  },
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
  isEdit?: boolean
  id?: string
  defaultValues?: FormValues
}

type FeadbackPopUp = {
  open: boolean
  message: string
  type: FeadbackPopUpProps['type']
  mode: 'create' | 'edit' | 'delete'
}

const CreateHabit = ({
  goBack,
  isEdit,
  id,
  defaultValues,
}: CreateHabitProps) => {
  const [feadbackPopUp, setFeadbackPopUp] = useState<FeadbackPopUp>({
    open: false,
    message: '',
    type: 'success',
    mode: 'create',
  })

  const router = useRouter()

  const { mutate: createHabit, isLoading } = useMutation({
    mutationKey: ['createHabit'],
    mutationFn: HabitService.create,
    onSettled: () => {
      queryClient.invalidateQueries(['habit', 'list'])
      queryClient.invalidateQueries(['habit_unique', id])
    },
    onSuccess: () => {
      setFeadbackPopUp({
        open: true,
        message: isEdit ? habitMessage.edit.sucess : habitMessage.create.sucess,
        type: 'success',
        mode: isEdit ? 'edit' : 'create',
      })
    },
  })
  const deleteHabit = useMutation({
    mutationKey: ['deleteHabit'],
    mutationFn: HabitService.delete,
    onSettled: () => {
      queryClient.invalidateQueries(['habit', 'list'])
    },
    onSuccess: () => {
      setFeadbackPopUp({
        open: true,
        message: habitMessage.delete.sucess,
        type: 'success',
        mode: 'delete',
      })
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      habit: defaultValues?.habit,
      category: defaultValues?.category,
      frequency: defaultValues?.frequency || [],
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  const onCreateHabit = (data: FormValues) => {
    if (isEdit) {
      createHabit({
        habit: data.habit,
        category: data.category,
        frequency: data.frequency,
        color: categories[Number(data.category)].color,
        user_id: '101',
        id: id,
      })

      return
    }

    createHabit({
      habit: data.habit,
      category: data.category,
      frequency: data.frequency,
      color: categories[Number(data.category)].color,
      user_id: '101',
    })
  }

  const onDeleteHabit = () => {
    if (id) {
      deleteHabit.mutate(id)
    }
  }

  return (
    <S.Wrapper isEdit={isEdit}>
      <Header
        title={isEdit ? habitMessage.edit.title : habitMessage.create.title}
        goBack={goBack}
      />
      {feadbackPopUp.open && (
        <FeadbackPopUp
          message={feadbackPopUp.message}
          type={feadbackPopUp.type}
          onClose={() => {
            if (feadbackPopUp.mode === 'delete') {
              router.push('/')
              return
            }
            setFeadbackPopUp({
              open: false,
              message: '',
              type: 'success',
              mode: 'create',
            })
            goBack()
          }}
        />
      )}

      {!feadbackPopUp.open && (
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
                        onClick={() => onChange(item.id)}
                        title={item.title}
                        icon={item.icon}
                        key={item.id}
                        isActive={item.id === value}
                        aria-label={`category: ${item.title}`}
                        aria-checked={item.id === value}
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
      )}

      {!feadbackPopUp.open && (
        <Button
          width="full"
          size="medium"
          isDisabled={Object.keys(errors).length > 0}
          onClick={handleSubmit(onCreateHabit)}
          isLoding={isLoading}
        >
          {isLoading && isEdit && habitMessage.edit.loading}
          {isLoading && !isEdit && habitMessage.create.loading}
          {isEdit ? habitMessage.edit.button : habitMessage.create.button}
        </Button>
      )}
      {isEdit && !feadbackPopUp.open && (
        <Button
          width="full"
          size="medium"
          color="danger"
          style={{
            marginTop: '1rem',
          }}
          onClick={onDeleteHabit}
        >
          Delete habit
        </Button>
      )}
    </S.Wrapper>
  )
}

export default CreateHabit
