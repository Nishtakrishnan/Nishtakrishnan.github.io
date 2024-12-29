window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var sections = document.querySelectorAll('.page');
    var viewportHeight = window.innerHeight;

    sections.forEach(function(section) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        var middle = (top + bottom) / 2;
        var link = document.querySelector('a[href="#' + section.id + '"]');

        // Check if the middle of the section is within the viewport
        if (scrollPos < bottom - viewportHeight / 2 && scrollPos + viewportHeight / 2 > top) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('#experience .circle');
    const ftiCircle = document.querySelector('.fti-circle');
    const illinoisCircle = document.querySelector('.illinois-circle');
    const valleyCircle = document.querySelector('.valley-circle');
    const nuwareCircle = document.querySelector('.nuware-circle');
    const muCircle = document.querySelector('.mu-circle');
    const awaazCircle = document.querySelector('.awaaz-circle');
    const experienceSection = document.getElementById('experience');
    const experienceTitle = document.querySelector('#experience .experience-title');
    const blackStrip = document.querySelector('.black-strip');
    const closeButton = document.querySelector('.close-btn');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    experienceTitle.classList.add('fade-in');

                    // Fade in the circles after the title animation completes
                    setTimeout(() => {
                        circles.forEach((circle, index) => {
                            setTimeout(() => {
                                circle.classList.add('fade-in');
                            }, index * 800); // Delay each circle by 800ms
                        });
                    }, 1200); // Delay the start of circles animation by 1.2s to ensure title is fully visible

                    const totalCirclesDuration = 1200 + circles.length * 800; // 1200ms delay + 800ms for each circle
                    setTimeout(() => {
                        experienceTitle.classList.remove('fade-in');
                        experienceTitle.classList.add('fade-out');

                        setTimeout(() => {
                            experienceTitle.textContent = "Click to learn more!";
                            experienceTitle.classList.remove('fade-out');
                            experienceTitle.classList.add('fade-in');
                            experienceTitle.classList.add('click-to-learn-more'); // Add the new class
                        }, 1000); // Duration of the fade-out animation
                    }, totalCirclesDuration + 2000); // Wait for all circles to appear and then 5 seconds

                }, 200);
                
                observer.unobserve(experienceSection);
            }
        });
    }, observerOptions);

    observer.observe(experienceSection);

    const handleCircleClick = (
        circle,
        experienceName,
        videoSource = null,
        imageSource = null,
        skills = null,
        rectangleColor = 'grey',
        skillsText = '',
        skillsArray = [] // Add an array for skills
    ) => {
        const circleClone = circle.cloneNode(true);
        circleClone.classList.add('clone');
        circles.forEach(c => {
            if (c !== circle) {
                c.classList.add('hidden');
            }
        });
        experienceTitle.classList.add('hidden');
        circle.classList.add('hidden'); // Hide the original circle
    
        circleClone.classList.add('centered');
        blackStrip.classList.add('active');
    
        const experienceText = blackStrip.querySelector('.experience-name');
        experienceText.innerHTML = experienceName; 
    
        if (videoSource) {
            const videoElement = document.getElementById('black-strip-video');
            videoElement.src = videoSource;
            videoElement.style.display = 'block';
            videoElement.load();
        }
    
        if (imageSource) {
            const imageElement = document.getElementById('black-strip-image');
            imageElement.src = imageSource;
            imageElement.style.display = 'block'; // Show the image
        }
    
        if (skills) {
            const greyBox = document.getElementById('grey-rectangle-experience-page');
            if (greyBox) {
                greyBox.style.display = 'block';
                greyBox.style.backgroundColor = rectangleColor;
    
                const textElement = greyBox.querySelector('.text-content');
                textElement.textContent = skillsText;
    
                const skillsList = document.getElementById('skills-list');
                skillsList.innerHTML = ''; // Clear previous skills
                skillsArray.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillsList.appendChild(li);
                });
            }
        }
        blackStrip.appendChild(circleClone);
    };
    
    
    
    
    
    
    
    // Example usage with specific experience names
    ftiCircle.addEventListener('click', () => {
        handleCircleClick(ftiCircle, 
        "<i><span style='color: #D3D3D3;'>Data Analyst Intern; Data Analyst Consultant (September 2024 - Present)</span></i><br/>" + "<br/>" +
        "At FTI Consulting, the Data & Analytics team, which falls under the Forensic and Litigation practice, uses data analysis to support legal investigations and financial disputes.<br/>"+ "<br/>" +
        "I work closely with clients to uncover valuable insights from datasets using programming languages such as Python and SQL, alongside platforms like Databricks and Tableau. In my role, I am responsible for cleaning and preparing data to ensure accuracy and usability. I assist in conducting in-depth analyses to support clients with legal investigations and disputes. I create reports and visualizations to help legal teams present findings clearly and maximize the value of the data.<br/>"+ "<br/>" +
        "This role has not only enhanced my technical skills in coding and analytics but also sharpened my communication and project management abilities. Each project presents unique challenges, allowing continuous learning and exposing me to a range of industries, including technology and finance. It has also strengthened my ability to handle stress, as the nature of forensic data analysis requires meeting tight deadlines and responding quickly to the demands of litigation.",        null,
        null,
        true,
        "rgba(50, 100, 255, 0.5)", // Color for the Nuware experience
        "Biggest Takeaways", // Text for the grey box
        ["Technical Skills: Python, SQL, Databricks, Tableau, Excel"]
        );
    });

    illinoisCircle.addEventListener('click', () => {
        handleCircleClick(illinoisCircle, 
        "<i><span style='color: #D3D3D3;'>Course Assitant for Computer Architecture - CS 233 (August 2022 - May 2024)</span></i><br/>" + "<br/>" +
        "CS 233, also known as Computer Architecture, is a course at the University of Illinois that explores the design and interaction of a computer's components. It covers topics such as digital logic design, data processing, memory management, and performance optimization within computer systems.<br/>"+ "<br/>" +
        "I became a course assistant for CS 233 because I was interested to learn more in depth about how computers work at their core and what happens behind the scenes when we write code. The course opened my eyes to the way computers process instructions and execute machine-level code, which deepened my appreciation for the programming languages we use every day.<br/>"+ "<br/>" +
        "I believe that the best way to truly master a subject is by teaching it. In this role, I created new material and held office hours to help students fully grasp the concepts. Being a CA not only sharpened my knowledge of computer architecture but also gave me the rewarding experience of hearing different perspectives and creative solutions from students. It challenged me to refine my own thought process and communicate complex ideas with clarity."
        , null, null, true, "rgb(255, 165, 79)", "Biggest Takeaways",
        ["Technical Skills: MIPS, Verilog"]);
    });

    nuwareCircle.addEventListener('click', () => {
        handleCircleClick(
            nuwareCircle,
            "<i><span style='color: #D3D3D3;'>Data Analyst Intern (June 2021 - August 2021)</span></i><br/>" + "<br/>" +
            "NuWare is a technology solutions company that provides customized solutions to companies through cloud computing, data science, and AI technologies. They support growth across many industries like finance, healthcare, and retail.<br/>"+ "<br/>" +
            "As an intern at NuWare for three months, I collaborated with a team of five to develop a time series industrial revenue forecasting model for a New Jersey based bank. This model was aimed at reducing the risk of lending to businesses. I conducted ETL on large datasets containing population demographics and industry performance data from 6 states. I also created visualizations and dashboards using Power BI, and performed customer segmentation. Our model successfully reduces the lending risk of the bank by 20%.<br>" + "<br/>" +
            "This internship gave me my first glimpse into the power of data. I was fascinated by how we used data to help a bank avoid risky loans, which sparked my interest in data science. I was motivated to take related classes and do more internships to further explore this field.",
            null,
            null,
            true,
            "rgba(71, 102, 227, 0.2)", // Color for the Nuware experience
            "Biggest Takeaways", // Text for the grey box
            ["Technical Skills: Power BI, Python, SQL", "Realized the impact and potential of using data."]
        );
    });
    
    valleyCircle.addEventListener('click', () => {
        handleCircleClick(valleyCircle, 
        "<i><span style='color: #D3D3D3;'>Outreach Program Volunteer (June 2019 - March 2020)</span></i><br/>" + "<br/>" +
        "The Valley School, where I studied, ran an outreach program that supported children from nearby villages with their schoolwork. Students were encouraged to volunteer and assist younger grades with subjects they needed more help in. I volunteered for the program during my last two years of high school, holding math tutoring sessions for younger students.<br/>"+ "<br/>" +
        "This volunteering experience was truly eye-opening. It taught me that every child has a unique learning style and pace, and that no one is inherently better than the other. I learned how to be patient and adaptable, and along the way, I also deepened my own understanding of math. I still reflect on the questions I was asked and the conversations I had with these students, fascinated by their thought processes.<br/>"+ "<br/>" +  
        "Through this experience, I was exposed to individuals from different socio-economic backgrounds, which helped me break free from the bubble I had lived in. It made me grateful for the privileges I was born into, but also reinforced the belief that every child has immense potential and deserves access to a quality education. I hope to use my future work and resources to help those in need and make a meaningful impact in their lives.", null, "images/experiencepage/valley-outreach.png");
    });

    muCircle.addEventListener('click', () => {
        handleCircleClick(muCircle,
            "<i><span style='color: #D3D3D3;'>Software Engineer Intern (June 2022 - August 2022)</span></i><br/>" + "<br/>" +
            "Mu Sigma is a decision sciences company that helps businesses through data-driven insights and advanced analytics.<br/>"+ "<br/>" +
            "During my three-month internship, I contributed to the backend development of a website that offers financial analysis to investors, with a focus on real-time trade data. The platform helps users identify market trends and visualize relationships between ETFs. I worked alongside another intern to integrate pair trade functionality, creating interactive visualizations that help users assess asset correlations.<br/>"+ "<br/>" +
            "We worked with InfluxDB for trade data storage, which was updated in real-time via Kafka. The live ticker data was sourced from the Interactive Brokers API. Our backend was powered by Scala, a language I initially wasn’t familiar with. However, by making use of my existing knowledge of other programming languages and applying my logical reasoning skills, I quickly became proficient in Scala and contributed effectively to the project. I also gained experience in debugging complex issues and writing clean, maintainable code throughout the development process.",
            null,
            null,
            true,
            "rgba(270, 200, 200, 0.8)",
            "Biggest Takeaways",
            ["Technical Skills: Scala, Kafka", "Improved knowledge about Trading", "Learned that leaving code uncommented is just setting up for future choas!"]
            );
    });

    awaazCircle.addEventListener('click', () => {
        handleCircleClick(awaazCircle, 
        "<i><span style='color: #D3D3D3;'>Member (2020 - 2023); Music Director (2021 - 2022)</span></i><br/>" + "<br/>" +
        "Illini Awaaz is an award-winning South-Asian fusion a cappella student organization at the University of Illinois. This team travels around the nation to compete within the Association of South-Asian A Capella (ASA) circuit.<br/>"+ "<br/>" +
        "Music has always been a central part of my life. I studied Indian classical music for nine years, performing at various events and moving through multiple levels of Hindustani music. During college, I spent three years as a member of Illini Awaaz, which allowed me to stay connected to music while singing alongside a group of friends who shared my passion. When I first joined, I couldn’t even read sheet music, but over time, I became fluent enough to arrange fusion pieces that beautifully blend Western and South Asian musical styles. Serving as the team’s Music Director for a year, I had the privilege of creating and teaching pieces to the group.<br/>"+ "<br/>" +     
        "Being part of this organization was a transformative experience. It not only provided me with a platform to grow as a musician but also taught me how to collaborate with and lead a team, contributing to both personal and professional growth.",
        "images/AwaazVideo.mp4");
    });

    closeButton.addEventListener('click', () => {
        blackStrip.classList.remove('active');

        const videoElement = document.getElementById('black-strip-video');
        if (videoElement) {
            videoElement.pause(); 
            videoElement.currentTime = 0; 
            videoElement.style.display = 'none'; 
        }

        const imageElement = document.getElementById('black-strip-image');
        if (imageElement) {
            imageElement.style.display = 'none';
        }

        const greyBox = document.getElementById('grey-rectangle-experience-page');
        if (greyBox) {
            greyBox.style.display = 'none';
        }
    
        circles.forEach(circle => {
            circle.classList.remove('hidden');
            
            const clone = blackStrip.querySelector('.clone');
            if (clone) {
                blackStrip.removeChild(clone);
            }
    
            // Ensure the original circle is visible again
            circle.classList.remove('hidden');
        });
    
        experienceTitle.classList.remove('hidden');
    });
    
});