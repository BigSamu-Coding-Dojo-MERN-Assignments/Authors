import React from 'react'
import { Link } from "react-router-dom";

import AuthorForm from '../components/AuthorForm'

const AddPage = () => {
  return (
    <main className ="container mt-3">
      
      <h2> Favorite Authors </h2>
      <Link to="/"> Home</Link>
      <p> Add a new author: </p>
      <AuthorForm
        formType={"create"}
      />

    </main>
  )
}

export default AddPage
