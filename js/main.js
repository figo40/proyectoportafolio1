const app=document.getElementById('typewriter');
const typewriter=new Typewriter(app,{
    loop:true,
    delay:true
});

typewriter
.typewriter('la capital del sol')
.pausefor(200)
.start();