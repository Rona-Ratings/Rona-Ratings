console.log('Taco')
const fetchData = () => {
    fetch('https://ddc-web-student.cnm.edu/apis/')
        .then(response => response.json())
        .then(initFetchObj => {
                //console.log(initFetchObj.data[1])
                const cardInfo = document.getElementById("card-info");
                const data = initFetchObj.data

                function setTagsWithMap(data) {

                    const mapCallback = (data) => {
                        return `
            <div class="card">
                <div class="card-header">
                    ${data.title}
                </div>
               
                    <div class="col-lg-12">
                        <img src="tacos-placeholder.jpg" class=" float-left" alt="placeholder">
                        <div class="card-body ">
                            
                            <div><p>Rona-Ratings</p></div>
                            <div><p>Location: 12365 Fake Drive NE</p></div>
                    <div><p>dine in</p></div>
                        </div>
                    
                    
                    </div>
                
            </div>`;
                    }

                    const cards = data.map(mapCallback)
                    return cards;
                }
                cardInfo.innerHTML = setTagsWithMap(data).join(" ")
            }

        )

}