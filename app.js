window.onload=()=>{

    const URL='https://coding-week-2024-api.onrender.com/api/data';
    
    const getData= async ()=>{

        const response=await fetch(URL)
        
        if(!response.ok){
            throw new Error("There was a problem while fetching the data")
        }
        const data=await response.json()
        return data;
    }
    getData().then(data=>{
        console.log('resolved',data)

        for(let i=0;i<10;i++){
        let img=document.querySelector("#imgelem"+(i+1))
        img.src=data[i].image;
        let para=document.querySelector('#head'+(i+1))
        let head=document.createTextNode(data[i].headline)
        let firstchild=para.firstChild
        para.insertBefore(head,firstchild)
        let date=document.createTextNode(data[i].date)
        para.appendChild(date)
        }
        for(let i=0;i<4;i++){
            let type=document.querySelector('#type'+(i+1))
            type.textContent=data[i].type
        }

        const blogcards=document.querySelectorAll('.blogcard')
        let box=document.querySelector('#box')
        let boximg=document.querySelector('#boximg')
        blogcards.forEach(blogcard=>{
            blogcard.addEventListener('click',()=>{
                let array=Array.from(blogcards)
                let index=array.indexOf(blogcard)
                console.log(index)
                
                boximg.src=blogcard.querySelector('img').src
                
                
                box.querySelector('#boxcontent').textContent=data[index].content
                box.style.display='flex'
                box.style.flex.direction='column'
            
                })
            })

            let j=0
            setInterval(()=>{
                let news=document.querySelector('#breakingnews')
                if(j==10) j=0
                
                news.textContent=data[j].headline
                j++
            },5000)
    }).catch(err=>{console.log('rejected',err)});

    const heartButton = document.getElementById('heartButton');


        heartButton.addEventListener('click', function() {
        this.classList.toggle('active');
        });
         
    let cross =document.querySelector('#cross')
    cross.addEventListener('click',()=>{box.style.display='none'})
    
}