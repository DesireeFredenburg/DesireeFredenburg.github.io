<!DOCTYPE html>
<html>
    <!--Head-->
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width" />
        <title>Desiree Fredenburg</title>
        <link rel="stylesheet" type="text/css" href="./CSS/portfolio_desiree.css">
    </head>

    <!--Body-->
    <body class="Background">
        
        <!--Navbar-->
        <div class="Navbar">
            <a class="active" href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#GitHub">GitHub</a>
            <a href="#Contact">Contact</a>
        </div>

        <!--Breaks inserted to add space between navbar and the first heading-->
        <br>
        <br>

        <!--Background video-->
        <div id="Home">
            <video autoplay muted loop id="Typing_Video">
                <source src="Typing.mp4" type="video/mp4">
                <!--Display message if video fails to run-->
                Your browser does not support HTML5 video.
            </video>
        </div>

        <!--Video text-->
        <div class="Video_Text">
            <h1 class="white-text">Desiree Fredenburg's Portfolio</h1>
                <p class="center">
                    <q>Design is not just what it looks like and feels like,
                        <br>design is how it works.
                    </q>
                    <br> -Steve Jobs
                    <br>
                    <br> My name is Desiree. Welcome to my portfolio website. On it, I will tell you about my background and experience.
                    <br>
                    <br> Thank you for stopping by and enjoy! 
                </p>           
        </div>

        <!--About section-->
        <div class="Row" id="About">
            <!--Left column-->
            <div class="Column_2">
                <img src="images/about_me.jpg" alt="computer and coffee">
            </div>
            <!--Right column-->
            <div class="Column_1">
                <h1>About</h1>
                <p>
                    I am a UI/ UX software developer who loves to code! As a mother of two, I enjoy time with my family and traveling. 
                    <br>
                    <br>I am a graduate of <a href="https://www.learncodinganywhere.com" target="_blank">The Tech Academy</a>’s UI/ UX Developer Boot Camp, and trained and experienced in the following web and programming languages: HTML, CSS, JavaScript, SQL and more. 
                    <br>
                    <br>I am a full-stack developer and would love to work with you on your project. <a href="#Contact">Contact</a> me below!
                </p>
            </div>
        </div>

        <!--GitHub section-->
        <div class="Row" id="GitHub">
            <!--Left column-->
            <div class="Column_1">
                <h1>GitHub</h1>
                <p class="center">
                    You can view my coding projects on my GitHub profile here:
                    <br>
                    <p class="center"><a href="https://github.com/DesireeFredenburg" target="_blank">Desiree Fredenburg's Github</a></p>
                </p>
            </div>
            <!--Right column-->
            <div class="Column_2">
                <a href="https://github.com/DesireeFredenburg" target="_blank"><img src="images/portfolio_demo_img/GitHub.png" alt="GitHub Logo"></a>
            </div>
        </div>

        <!--Contact section-->
        <div class="Row" id="Contact">
            <!--Contact image, left column-->
            <div class="Column_2 Column_tall">
                <img src="images/contact_me.jpg" alt="computer and books">
            </div>
            <!--Contact form, right column-->
            <div class="Column_1 Column_tall">
                <h1>Contact</h1>
                <!--This specifies where and how to send the form data; we are leaving it blank-->
                <form action="https://formspree.io/f/mayllwel" method="POST"> <!-- Here we are utilizing a 3rd party service to submit the contact form data, insert your formspree endpoint in the action attribute -->
                    <label>Name:</label>
                        <input type="text" placeholder="Please enter your name here">
                    <label>Email:</label>
                        <input type="text" id="Email" name="Email" placeholder="Please enter your email here">
                    <label>Message:</label>
                        <input type="text" id="Message" name="Message" placeholder="Please write your message here">
                        <input type="submit" value="SUBMIT">
                </form>
            </div>
        </div>

        <!--Footer section-->
        <footer>
            <p>
                <p class="center">Desiree Fredenburg &nbsp; &nbsp; 2020</p>
                <br>
            </p>
        </footer>
    </body>
</html>