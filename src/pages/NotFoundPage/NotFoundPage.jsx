import css from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <p className={css.error}>This page is not found! Please return to the  <Link to="/"> Home page</Link>!</p>
    </>
  )
}
