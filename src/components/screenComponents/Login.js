export const Login = () => 
    {
        return (
            <>
                <h1>Welcome back!</h1>
                <form>
                    <label for='email'>E-mail</label>
                    <input type='text' id='email' name='email' placeholder='myemail@gmail.com'></input>
                    
                    <label for='password'>Password</label>
                    <input type='text' id='password' name='password' placeholder='mypassword123'></input>

                    <p>Forgot password?</p>

                    <button>Sign in</button>

                </form>
                <footer>
                    <p>Copyright © 2022 . Burger Queen. All rights reserved.</p>
                </footer>
            </>
        );
    }