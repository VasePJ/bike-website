// write your code here
// use products array from the other file in here 

// (yes you can use it, it doesn't matter if it's from another file)
$(function () {
    let products = [
        {
            name: 'LE GRAND TOURS 1.0',
            price: 19500,
            gender: 'MALE',
            brand: 'LE GRAND BIKES',
            image: '1'
        },
        {
            name: 'LE GRAND METZ 1.0',
            price: 19500,
            gender: 'MALE',
            brand: 'LE GRAND BIKES',
            image: '2'
        },
        {
            name: 'LE GRAND LILLE 2.0',
            price: 25000,
            gender: 'MALE',
            brand: 'LE GRAND BIKES',
            image: '3'
        },
        {
            name: 'LE GRAND LILLE 1',
            price: 24400,
            gender: 'FEMALE',
            brand: 'LE GRAND BIKES',
            image: '4'
        },
        {
            name: 'LE GRAND CROSSMO 1',
            price: 22400,
            gender: 'MALE',
            brand: 'LE GRAND BIKES',
            image: '5'
        },
        {
            name: 'LE GRAND MEGISTO',
            price: 34400,
            gender: 'FEMALE',
            brand: 'LE GRAND BIKES',
            image: '6'
        },
        {
            name: 'LE GRAND TAXI',
            price: 19400,
            gender: 'MALE',
            brand: 'LE GRAND BIKES',
            image: '7'
        },
        {
            name: 'KROSS TRANS 3.0',
            price: 35400,
            gender: 'MALE',
            brand: 'KROSS',
            image: '8'
        },
        {
            name: 'KROSS TRANS 2.0',
            price: 31600,
            gender: 'MALE',
            brand: 'KROSS',
            image: '9'
        },
        {
            name: 'KROSS TRANS 1.0',
            price: 28400,
            gender: 'MALE',
            brand: 'KROSS',
            image: '10'
        },
        {
            name: 'KROSS SETO',
            price: 43000,
            gender: 'MALE',
            brand: 'KROSS',
            image: '11'
        },
        {
            name: 'KROSS PULSO 1.0',
            price: 42000,
            gender: 'MALE',
            brand: 'KROSS',
            image: '12'
        },
        {
            name: 'KROSS LEVEL 4.0',
            price: 48000,
            gender: 'MALE',
            brand: 'KROSS',
            image: '13'
        },
        {
            name: 'KROSS LEVEL 3.0',
            price: 44000,
            gender: 'MALE',
            brand: 'KROSS',
            image: '14'
        },
        {
            name: 'KROSS LEVEL 2.0',
            price: 40000,
            gender: 'MALE',
            brand: 'KROSS',
            image: '15'
        },
        {
            name: 'KROSS LEA 4.0',
            price: 30000,
            gender: 'FEMALE',
            brand: 'KROSS',
            image: '16'
        },
        {
            name: 'KROSS LEA 2.0',
            price: 26000,
            gender: 'FEMALE',
            brand: 'KROSS',
            image: '17'
        },
        {
            name: 'KROSS LEA 1.0',
            price: 24400,
            gender: 'FEMALE',
            brand: 'KROSS',
            image: '18'
        },
        {
            name: 'KROSS HEXAGON 8.0',
            price: 49000,
            gender: 'MALE',
            brand: 'KROSS',
            image: '18'
        },
        {
            name: 'KROSS HEXAGON 7.0',
            price: 40000,
            gender: 'MALE',
            brand: 'KROSS',
            image: '19'
        },
        {
            name: 'KROSS HEXAGON 6.0',
            price: 35400,
            gender: 'MALE',
            brand: 'KROSS',
            image: '20'
        },
        {
            name: 'EXPLORER SUMMER – 26″',
            price: 15000,
            gender: 'MALE',
            brand: 'EXPLORER',
            image: '1'
        },
        {
            name: 'EXPLORER LADY',
            price: 14000,
            gender: 'FEMALE',
            brand: 'EXPLORER',
            image: '2'
        },
        {
            name: 'EXPLORER POWER – 26',
            price: 12000,
            gender: 'FEMALE',
            brand: 'EXPLORER',
            image: '3'
        },
        {
            name: 'EXPLORER TEA LADY',
            price: 12000,
            gender: 'FEMALE',
            brand: 'EXPLORER',
            image: '4'
        },
        {
            name: 'EXPLORER LEGION – 26″',
            price: 12000,
            gender: 'MALE',
            brand: 'EXPLORER',
            image: '5'
        },
        {
            name: 'VISITOR BAMBOO – 26″',
            price: 16000,
            gender: 'FEMALE',
            brand: 'VISITOR',
            image: '6'
        },
        {
            name: 'VISITOR ALLEY – 26″',
            price: 16000,
            gender: 'MALE',
            brand: 'VISITOR',
            image: '7'
        },
        {
            name: 'EXPLORER SPARK – 24″',
            price: 10800,
            gender: 'MALE',
            brand: 'EXPLORER',
            image: '8'
        },
        {
            name: 'EXPLORER – 20″ – ROBIX',
            price: 9400,
            gender: 'MALE',
            brand: 'EXPLORER',
            image: '9'
        },
        {
            name: 'PONY – 20″',
            price: 8400,
            gender: 'MALE',
            brand: 'PONY',
            image: '10'
        },
        {
            name: 'PONY 12″',
            price: 8000,
            gender: 'MALE',
            brand: 'PONY',
            image: '11'
        },
        {
            name: 'EXPLORER MAGNITO 24″',
            price: 11500,
            gender: 'MALE',
            brand: 'EXPLORER',
            image: '12'
        },
        {
            name: 'FORCE MILITAR -16″',
            price: 5990,
            gender: 'MALE',
            brand: 'FORCE',
            image: '13'
        },
        {
            name: 'BEST-FRIENDS-20″',
            price: 7300,
            gender: 'MALE',
            brand: 'E-BIKES',
            image: '14'
        },
        {
            name: 'ATHENA-16″',
            price: 5990,
            gender: 'MALE',
            brand: 'E-BIKES',
            image: '15'
        },
        {
            name: 'VISITOR – GEISHA – 28″',
            price: 8990,
            gender: 'FEMALE',
            brand: 'VISITOR',
            image: '16'
        },
        {
            name: 'VISITOR – GABI – 26″',
            price: 12990,
            gender: 'FEMALE',
            brand: 'VISITOR',
            image: '17'
        },
        {
            name: 'VISITOR SECRET – 24″',
            price: 5990,
            gender: 'FEMALE',
            brand: 'VISITOR',
            image: '18'
        },
        {
            name: 'FORCE MILITAR -16″',
            price: 13900,
            gender: 'MALE',
            brand: 'FORCE',
            image: '19'
        },
        {
            name: 'VISITOR - ROZE – 26″',
            price: 17300,
            gender: 'FEMALE',
            brand: 'VISITOR',
            image: '20'
        },
        {
            name: 'VISITOR - DOTT – 26″',
            price: 15000,
            gender: 'FEMALE',
            brand: 'VISITOR',
            image: '1'
        },
        {
            name: 'VISITOR-ZERDELIJA – 26″',
            price: 13300,
            gender: 'FEMALE',
            brand: 'VISITOR',
            image: '2'
        },
        {
            name: 'BLUESTER 16″',
            price: 5990,
            gender: 'MALE',
            brand: 'E-BIKES',
            image: '3'
        },
        {
            name: 'BASKET 20″',
            price: 30000,
            gender: 'FEMALE',
            brand: 'E-BIKES',
            image: '4'
        },
        {
            name: 'IDEAL HYDRAULIC 2018',
            price: 32300,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '5'
        },
        {
            name: 'IDEAL MOOVIC 2018',
            price: 23100,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '6'
        },
        {
            name: 'IDEAL FUNCORE 2018',
            price: 34500,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '7'
        },
        {
            name: 'IDEAL HYDRAULIC DB 2018',
            price: 31300,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '8'
        },
        {
            name: 'CAPRIOLO PASSION LADY',
            price: 16900,
            gender: 'FEMALE',
            brand: 'E-BIKES',
            image: '9'
        },
        {
            name: 'VIPER – TALON',
            price: 34500,
            gender: 'MALE',
            brand: 'E-BIKES',
            image: '10'
        },
        {
            name: 'AQL – RAPTORS',
            price: 70000,
            gender: 'MALE',
            brand: 'E-BIKES',
            image: '11'
        },
        {
            name: 'IDEAL CITYCOM',
            price: 30500,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '12'
        },
        {
            name: 'IDEAL CITYLIFE',
            price: 28000,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '13'
        },
        {
            name: 'IDEAL CITYRUN',
            price: 26460,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '14'
        },
        {
            name: 'IDEAL COMFORT W',
            price: 31500,
            gender: 'FEMALE',
            brand: 'IDEAL',
            image: '15'
        },
        {
            name: 'IDEAL EZIGO W',
            price: 32500,
            gender: 'FEMALE',
            brand: 'IDEAL',
            image: '16'
        },
        {
            name: 'IDEAL EZIGO LADY',
            price: 30500,
            gender: 'FEMALE',
            brand: 'IDEAL',
            image: '17'
        },
        {
            name: 'IDEAL TRAVELON',
            price: 38500,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '18'
        },
        {
            name: 'IDEAL BOOMMAX 29 Y15',
            price: 35500,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '19'
        },
        {
            name: 'IDEAL HILLMASTER 29 Y15',
            price: 35500,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '20'
        },
        {
            name: 'IDEAL CROSSMO',
            price: 30000,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '1'
        },
        {
            name: 'IDEAL NERGETIC',
            price: 34500,
            gender: 'MALE',
            brand: 'IDEAL',
            image: '2'
        }
    ];
    $("#showAll").find(".badge").html(products.length);
    $("#filterMale").find(".badge").html(products.filter(function (bike) {
        return (bike.gender === "MALE");
    }).length);
    $("#filterFemale").find(".badge").html(products.filter(function (bike) {
        return (bike.gender === "FEMALE");
    }).length);
    $("#filterLeGrand").find(".badge").html(products.filter(function (bike) {
        return (bike.brand === "LE GRAND BIKES");
    }).length);
    $("#filterKross").find(".badge").html(products.filter(function (bike) {
        return (bike.brand === "KROSS");
    }).length);
    $("#filterExplorer").find(".badge").html(products.filter(function (bike) {
        return (bike.brand === "EXPLORER");
    }).length);
    $("#filterPony").find(".badge").html(products.filter(function (bike) {
        return (bike.brand === "PONY");
    }).length);
    $("#filterForce").find(".badge").html(products.filter(function (bike) {
        return (bike.brand === "FORCE");
    }).length);
    $("#filterEbikes").find(".badge").html(products.filter(function (bike) {
        return (bike.brand === "E-BIKES");
    }).length);
    $("#filterIdeal").find(".badge").html(products.filter(function (bike) {
        return (bike.brand === "IDEAL");
    }).length);
    $("#filterVisitor").find(".badge").html(products.filter(function (bike) {
        return (bike.brand === "VISITOR");
    }).length);

    $(".sidebar-row").hover(function () {
        $(this).addClass('scale');
        $(this).find('span').css({
            color: 'orange',
        });
    }, function () {
        $(this).removeClass('scale');
        $(this).find('span').css({
            color: '',
        });
    });
    let bikeLlist = $("#bikeList");
    //on click filtering function//
    products.forEach(function (element) {
        bikeList.innerHTML += `<div class="col-md-4">
        <div class="thumbnail">
                  <a href="#">
                    <div>
                      <img src="img/${element.image}.png">         
                    </div>
                    <div class="caption">
                      <h5><b>${element.name}</b></h5>
                      <p>${element.price}</p>
                    </div>
                </a>
        </div>
  		</div>`
    });
    $("#showAll").on("click", function () {
        bikeList.innerHTML = "";
        products.forEach(function (element) {
            bikeList.innerHTML += `<div class="col-md-4">
            <div class="thumbnail">
                      <a href="#">
                        <div>
                          <img src="img/${element.image}.png">         
                        </div>
                        <div class="caption">
                          <h5><b>${element.name}</b></h5>
                          <p>${element.price}</p>
                        </div>
                    </a>
            </div>
              </div>`
        });
    });

    $("#filterMale").on("click", function () {
        filter("gender", "MALE");
    });
    $("#filterFemale").on("click", function () {
        filter("gender", "FEMALE");
    });
    $("#filterLeGrand").on("click", function () {
        filter("brand", "LE GRAND BIKES");
    });
    $("#filterKross").on("click", function () {
        filter("brand", "KROSS");
    });
    $("#filterExplorer").on("click", function () {
        filter("brand", "EXPLORER");
    });
    $("#filterVisitor").on("click", function () {
        filter("brand", "VISITOR");
    });
    $("#filterPony").on("click", function () {
        filter("brand", "PONY");
    });
    $("#filterForce").on("click", function () {
        filter("brand", "FORCE");
    });
    $("#filterEbikes").on("click", function () {
        filter("brand", "E-BIKES");
    });
    $("#filterIdeal").on("click", function () {
        filter("brand", "IDEAL");
    });
    //universal filter function//
    function filter(filterType, filterValue) {
        let filteredBikes;
        if (filterType === "gender") {
            filteredBikes = products.filter(function (bike) {
                return (bike.gender === filterValue);
            });
        }
        else if (filterType === "brand") {
            filteredBikes = products.filter(function (bike) {
                return (bike.brand === filterValue);
            });
        } else {
            filteredBikes = products;
        }
        bikeList.innerHTML = "";
        filteredBikes.forEach(function (element) {
            bikeList.innerHTML += `<div class="col-md-4">
            <div class="thumbnail">
                      <a href="#">
                        <div>
                          <img src="img/${element.image}.png">         
                        </div>
                        <div class="caption">
                          <h5><b>${element.name}</b></h5>
                          <p>${element.price}</p>
                        </div>
                    </a>
                </div>
            </div>`
        });
    }

});