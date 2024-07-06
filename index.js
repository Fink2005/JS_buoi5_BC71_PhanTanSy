function manage() {
    var diemChuan = document.getElementById("diem_chuan").value * 1
    var khuVuc = document.getElementById("area").value * 1

    var doiTuong = document.getElementById("object").value * 1
    var subject1 = document.getElementById("mon1").value * 1
    var subject2 = document.getElementById("mon2").value * 1
    var subject3 = document.getElementById("mon3").value * 1
  
  

// lua chon khu vuc
if (khuVuc === 2 ) { console.log("ban da chon khu vuc A")}
else if (khuVuc === 1) {console.log("ban da chon khu vuc B")}
else if (khuVuc === 0.5) {console.log("ban da chon khu vux C")}
else {console.log("ban ko nam trong khu vuc nao ca")}


// lua chon doi tuong

 var average = subject1 + subject2 + subject3 + khuVuc + doiTuong
if (average >= diemChuan && subject1 != 0 && subject2 != 0 && subject3 != 0) {
document.getElementById("result").innerText = "Bạn đã đỗ với số điểm là "+ average
document.getElementById("result").style.display = "block"
}
else {alert("Bạn rớt với số điểm là:"+ average)} 
 
}


// TINH TIEN DIEN

function calElectric() {
    var name = document.getElementById("full_name").value 
    var soKw = document.getElementById("kw").value * 1
  var calculate = 0
  if(soKw <= 50) {
  calculate = soKw * 500
  }
  else if (soKw > 50 && soKw <= 100) {
    calculate = (50 * 500) + (soKw - 50) * 650 
    
  }

  else if (soKw > 100 && soKw <= 200) {
    calculate = (50 * 500) + (50 * 650 )  + ( soKw - 100) * 850

  }
  else if (soKw > 200 && soKw <= 350) {
    calculate = (50 * 500) + (50 * 650 )  + ( 100 * 850 ) + (soKw - 200) * 1100

  }
  else { calculate = (50 * 500) + (50 * 650 )  + ( 100 * 850 ) + (150 * 1100) + (soKw - 350) * 1300
}

// show 
document.getElementById("result2").innerText = "Họ và tên:" + " " + name + " " + "Tiền điện:" + " " + calculate.toLocaleString()

}


// Thue thu nhap ca nhan

// function exchangeTax() {
//     var Luong = document.getElementById("salary").value

//     if (Luong == tr) {
//         Luong.replace(/tr/g, 000000)
//     }
//     var  numberValue = parseFloat(Luong)
   

// }

function caltax() {
   var fullName = document.getElementById("name2").value 
   var Salary1 = document.getElementById("salary").value 
//    Salary1 = Salary1.replace(/tr/gi, '000')
//    document.getElementById("salary").value = Salary1
   var  belong = document.getElementById("person").value * 1

// change number 




 var replace = null
if (Salary1.includes("tr")) {
    replace = +Salary1.replace(/tr/, "000000")
    replace = parseFloat(replace)
    Salary1 = replace

}
else if (Salary1.includes("e")) {
    replace = parseFloat(Salary1)
    Salary1 = replace
}





income = ((Salary1 - 4000000) - (belong * 1600000) )
var calculate = 0
    if ( income <= 60000000 ) {
        calculate =  income * 0.05
    }
    else if (income > 60000000 && income <= 120000000) {
        calculate = income * 0.1

    }
    else if (income > 120000000 && income <= 210000000 ) {
        calculate = income * 0.15
    }
    else if (income > 210000000 && income <= 384000000) {
        calculate = income * 0.2
    }
    else if (income >  384000000 && income <= 624000000) {
        calculate = income *0.25
    }
    else if (income >  624000000 && income <= 960000000) {
        calculate = income* 0.3
    }
    else { calculate = income * 35

    }
    


    //show

    document.getElementById("result3").innerText = "Họ và tên:" + " " + fullName + " thuế của bạn là " + " " + calculate.toLocaleString()
}



// Tinh tien cap
function exchange() {
    
    var connectionDiv = document.getElementById("connection")
     var doiTuong1 = document.getElementById("objects")
     var selectValue = doiTuong1.value
     if ( selectValue === "resident") {
        connectionDiv.style.display = "none"
     }
     else if (selectValue === "select") {
        connectionDiv.style.display = "none";
     }
     else     { connectionDiv.style.display = "block";}
    
    }
function calculateCap() {
    var doiTuong = document.getElementById("objects").value
    var khachHang = document.getElementById("customer").value
    var kenh = document.getElementById("channel").value * 1
    var ketNoi = document.getElementById("connection").value * 1

    var calculate = 0
    if (doiTuong === "resident") {
        calculate = 4.5 + 20.5 + (kenh * 7.5 )
    }
    
    else if  (doiTuong === "business") 
    { document.getElementById("connection").style.display = "block"
    document.getElementById("connection").innerHTML = ketNoi
        if (ketNoi <= 10) {
          calculate =  15 + 75 + (kenh * 50 ) 
        }
        else {
            calculate =  15 + 75 + (kenh * 50 ) + (ketNoi - 10 ) * 5
        }
    }



    document.getElementById("result4").innerText = "Họ và tên:" + " " + khachHang + " " + "Tiền cáp:" + " " + "$" + calculate.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})

}

