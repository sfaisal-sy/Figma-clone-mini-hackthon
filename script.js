
class ProcessingCards {
    constructor (index, heading, details) {
        this.index = index;
        this.heading = heading;
        this.details = details;
    };
};

let processCards = {
    consultation  : [
                        new ProcessingCards ( 1, 'Consultaing', 'Lorem ipsum dolor sit amet consecte.')              
                    ],
    consultation2 : [
                        new ProcessingCards (2, 'Research and Strategy Development', 'Lorem ipsum dolor sit amet consecte.'),
    ],              
    consultation3 : [
                        new ProcessingCards (3, 'Implementation', 'Lorem ipsum dolor sit amet consecte.'),
    ],              
    consultation4 : [
                        new ProcessingCards (4, 'Monitoring and Optimization', 'Lorem ipsum dolor sit amet consecte.'),
    ],              
    consultation5 : [
                        new ProcessingCards (5, 'Reporting and Communication', 'Lorem ipsum dolor sit amet consecte.'),
    ],              
    consultation6 : [
                        new ProcessingCards (5, 'Continual Improvement', 'Lorem ipsum dolor sit amet consecte.'),
    ]              
};

let newCard = document.getElementById('cards');


for (let keys of Object.values(processCards)){
    for (let values of keys) {
        let {index, heading, details} = values;        
        let card = `
                    <div class="container border rounded-5 mb-3 parentdiv" >                    
                        <div class="row btnparent ">
                                 <div class="col custom-card  " >
                                    <h3>${index}</h3>
                                    <h3>${heading}</h3>
                                    <button class="btn border detailsbtn rounded-5" type="button">+</button>
                                    
                                </div>
                        <hr>
                    
                            <div class="row mt-2">
                                <div class="col custom-col details ">
                                    <p>${details} </p>
                                </div>
                            </div> 
                        </div>                   
                    </div>
        `;
        newCard.innerHTML += card

    };
};

let allbtn = document.querySelectorAll('.detailsbtn');

allbtn.forEach(function(btn) {
    btn.addEventListener('click', () => {
       let parentbtn = btn.closest('.btnparent');
       let moreDetails = parentbtn.querySelector('.details');

       let cardContainer = parentbtn.closest('.container');
      
       moreDetails.classList.toggle('show')
      cardContainer.classList.toggle('container-card-active')
       
       btn.textContent = moreDetails.classList.contains ('show')? '-' : '+';
       
    })
})
