//move.js
//jquery
//snap svg

$(document).ready(function(){
    //logging
    console.log('script.js loaded');
    //global vars
    var svgContainer = $('.svg-container'),
        svgElement = $('svg'),
        svgPath = Snap.select("#bulb-icon"),
        projects = [$('#project1'),$('#project2'),$('#project3'),$('#project4')],
        projectsContainer = $('.projects-container'),
        project1 = $('#project1'),
        project2 = $('#project2'),
        project3 = $('#project3'),
        project4 = $('#project4'),
        githubIcon = $('#gh-svg'),
        twitterIcon = $('#tw-svg'),
        emailIcon = $('#mail-svg'),
        myRotate = -45,
        toggle = false;
    //svg container click
    svgContainer.click(function(){
        if(!toggle){
            //logging
            console.log('svg-container clicked');
            //rotate icon
            svgPath.animate({transform: "r" + myRotate + ",260,260", fill: "#000000"}, 700);
            //logging
            console.log('icon rotated');
            //move icon then hide it
            svgContainer.animate({width:"20%"}, 1000, function(){
                svgContainer.css("display", "none");
                projectsContainer.css("display", "block");
                //animate in projects
                
                //jquery animation
                project1.fadeToggle("slow", function(){
                    project2.fadeToggle("slow", function(){
                        project3.fadeToggle("slow", function(){
                            project4.fadeToggle("slow");
                        })
                    })
                })
                
                //move.js animation
//                move('#project1')
//                    .set('display', 'block')
//                    .end();
            });
            //logging
            console.log('icon moved and hidden');
            //toggle the toggle var
            toggle = true;
        };
    });//end click
    
    //project 1 click
    project1.click(function(){
        window.open('http://wosgames.xyz', '_blank'); 
    });
    //project 2 click
    project2.click(function(){
        window.open('http://sams.fourthlight.com', '_blank'); 
    });
    //project 3 click
    project3.click(function(){
        window.open('http://www.skinparty.xyz:8080', '_blank'); 
    });
    //project 4 click
    project4.click(function(){
        window.open('http://www.vrapt.xyz', '_blank'); 
    });
    //github click
    githubIcon.click(function(){
        window.open('https://github.com/fourthlight', '_blank'); 
    });
    //twitter click
    twitterIcon.click(function(){
        window.open('https://twitter.com/fourthlight', '_blank'); 
    });
    //email click
    emailIcon.click(function(){
        window.open('mailto:contact@fourthlight.com', '_blank'); 
    });
});//end doc ready