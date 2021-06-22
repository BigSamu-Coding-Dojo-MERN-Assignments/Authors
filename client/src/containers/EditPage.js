import React from 'react'
import { Link } from "react-router-dom";

import AuthorForm from '../components/AuthorForm'

const EditPage = () => {
	return (
		<main className ="container mt-3">
      
      <h2> Favorite Authors </h2>
      <Link to="/"> Home</Link>
      <p> Edit this author: </p>
      <AuthorForm
        formType={"update"}
      />

    </main>
	)
}

export default EditPage
