import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../AppContext'
import axios from 'axios'

const Register = () => {
  const { history, isAuth, login, user } = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const methods = useForm()
  const { handleSubmit, register } = methods

  const inputName = (e) => {
    setName(e.target.value)
  }

  const inputEmail = (e) => {
    setEmail(e.target.value)
  }

  const inputPassword = (e) => {
    setPassword(e.target.value)
  }

  const inputConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const onSubmit = (record) => {
    if (password !== confirmPassword) {
      alert('パスワードが一致しません。もう一度お試しください。')
      return false
    }
    axios.post('/api/register', record).then((res) => {
      const user = res && res.data ? res.data : ''
      if (user) {
        login(user)
        history.push('/dashboad')
      }
    })
  }

  console.log('user: ', user)
  console.log('isAuth: ', isAuth)

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="name"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Name
                  </label>
                  <div className="col-md-6">
                    <input
                      autoComplete="name"
                      className="form-control @error('name') is-invalid @enderror"
                      id="name"
                      name="name"
                      onChange={inputName}
                      ref={register}
                      required
                      type="text"
                      value={name}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="email"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    E-Mail Address
                  </label>
                  <div className="col-md-6">
                    <input
                      autoComplete="email"
                      className="form-control @error('email') is-invalid @enderror"
                      id="email"
                      name="email"
                      onChange={inputEmail}
                      ref={register}
                      required
                      type="email"
                      value={email}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="password"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Password
                  </label>
                  <div className="col-md-6">
                    <input
                      autoComplete="new-password"
                      className="form-control @error('password') is-invalid @enderror"
                      id="password"
                      name="password"
                      onChange={inputPassword}
                      ref={register}
                      required
                      type="password"
                      value={password}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="password-confirm"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Confirm Password
                  </label>
                  <div className="col-md-6">
                    <input
                      autoComplete="new-password"
                      className="form-control"
                      id="password-confirm"
                      name="password_confirmation"
                      onChange={inputConfirmPassword}
                      ref={register}
                      required
                      type="password"
                      value={confirmPassword}
                    />
                  </div>
                </div>
                <div className="form-group row mb-0">
                  <div className="col-md-6 offset-md-4">
                    <button
                      className="btn btn-primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
