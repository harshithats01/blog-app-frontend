import React from 'react'

const SignIn = () => {
    return (

        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email:</label>
                            <input type="text" className="form-control" name='' />
                            <br />
                        </div>
                        <br />
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password:</label>
                            <input type="text" className="form-control" name='' />

                        </div>



                    </div>

                </div>
                <br />
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-primary" >Submit</button><br /><br />
                    <a href='#'>New users click here</a>
                </div>


            </div>
        </div>
    )
}

export default SignIn