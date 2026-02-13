/*


    <seection class="working-process" id="working-process">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="process border">
                        <h1>01 </h1>
                        <h6 class="consultation">Consultation</h6>
                        <button class=" btn custom-btn border rounded-5  ">+</button>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </seection>


*/

let processingCard = document.getElementById('working-process');

class Process {
    constructor (index, heading, moreDetails) {
        this.index = index;
        this.heading = heading;
        this.moreDetails = moreDetails;
    };
};



let wrokPrecess = {
    consultation1 : [
                new Process ( 1, 'Consultation', 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'),
    ],
    consultation2 : [
                new Process ( 2, 'Research and Strategy Development', 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'),
    ],
    consultation3 : [
                new Process ( 3, 'Implementation', 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'),
    ],
    consultation4 : [
                new Process ( 4, 'Monitoring and Optimization', 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'),
    ],
    consultation5 : [
                new Process ( 5, 'Reporting and Communication', 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'),
    ],
    consultation6 : [
                new Process ( 6, 'Continual Improvement', 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'),
    ]
};

// workProcessCard();


for (let keys of Object.values(wrokPrecess)) {
    // console.log(keys);
    for(let value of keys){

        let  {index, heading, details, moreDetails} = value;        
                
            let card = ` 
                        
                        <div class="container  border rounded-5 mb-3 colorclasss">
                            <div class="row parent">
                                <div class="col">
                                    <div class="process">
                                        <h2> ${index}</h2>
                                        <h4> ${heading} </h4>
                                        <button class="btn detailsbtn border rounded-5">+</button>
                                    </div>
                        <hr>
                                    <div class="row ">
                                        <div class="col moreinfo ">
                                        <p>${moreDetails} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            
            `;
            processingCard.innerHTML += card;
                            
                            
                            
};                    
};

let detailsBtn = document.querySelectorAll('.detailsbtn');

detailsBtn.forEach(function(btn) {

    btn.addEventListener('click', function() {

        let parent = btn.closest('.parent'); 
        let moreInfo = parent.querySelector('.moreinfo');

        // Get the main container of this card
        let cardContainer = parent.closest('.container');

        // Toggle animation
        moreInfo.classList.toggle('show');

        // Toggle card background
        cardContainer.classList.toggle('process-card-active');

        // Toggle button text
        btn.textContent = moreInfo.classList.contains('show') ? '-' : '+';

    });

});
