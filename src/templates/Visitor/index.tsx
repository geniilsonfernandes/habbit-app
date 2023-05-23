import React, { useState } from 'react'
import * as S from './styles'
import Input from 'components/Input'
import Button from 'components/Button'
import api from 'libs/axios'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'

const Visitor = () => {
  const router = useRouter()

  const [nickname, setNickname] = useState('')
  const [isError, setIsError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateAccount = async () => {
    if (!nickname) {
      setIsError('Nickname is required')
      return
    }
    setIsLoading(true)
    try {
      const user = await api.post('/user', {
        nickname,
      })

      setCookie(null, '@habit', JSON.stringify(user.data), {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
      })

      router.push('/')
    } catch (error) {
      setIsError('Nickname is already taken')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Image>
          <img src="/img/visitor.png" alt="visitor" />
        </S.Image>
      </S.Header>
      <S.Content>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault()
            handleCreateAccount()
          }}
        >
          <S.Title>Easy way to Track your Habit</S.Title>
          <S.Subtitle>
            All your activities will be recorded and displayed briefly and
            clearly
          </S.Subtitle>
          <Input
            label="Nickname"
            error={!!isError}
            helperText={isError}
            onChange={(e) => setNickname(e.target.value)}
            value={nickname}
          />
          <Button isLoding={isLoading} width="full">
            Create Account
          </Button>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  )
}

export default Visitor
