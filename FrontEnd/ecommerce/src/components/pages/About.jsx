import React from 'react'
import {Link} from "react-router-dom"
function About() {
  return (
    <main className='about'>
        
<div className='pg-header'>
<div className='container'>
<nav aria-label="breadcrumb">

<ol className="breadcrumb justify-content-end">
{/* <li className="breadcrumb-item"><Link to="index element">Home</Link></li> */}
<li className="breadcrumb-item active" aria-current="page">About</li>
</ol>

</nav>
<h1> About </h1>
</div>
</div>

<div className='container-content'>
    <div className='row'>
<div className='col-lg-4'>
<h2> Why Choose Us</h2>
<p> we are awesome </p>
</div>

<div className='col-lg-4'>
<h2> Our Mission.</h2>
<p> we are awesome </p>
</div>
<div className='col-lg-4'>
<h2> What We Do.</h2>
<p> we are awesome ajkhqsdjdhqjdhqkjsdhkqsjh
    dkqshdkqjhdkjqhdkjqshdkjqh
    dkjqh </p>
</div>

    </div>
</div>
    </main>
    
  )
}

export default About