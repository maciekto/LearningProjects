function CALENDAR(){
    const date1 = new Date();
    let day = date1.getDate();
    let week = date1.getDay();
    let month = date1.getMonth();
    const currentMonth = month;
    let year = date1.getFullYear();
    const currentYear = year;

    const startingMonth = [
            [3,6,7,3,5,1,3,6,2,4,7,2],//2020
            [5,1,1,4,6,2,4,7,3,5,1,3], //2021
        ];
    let yearConvert = year;

    if(year == 2020){
        yearConvert = 0;
        //console.log(yearConvert);
    }
    // UP LAYOUT LOADING MONTH AND YEAR //
    function upLayout(){
        const monthHTML = document.querySelector('.month');
        const yearHTML = document.querySelector('.year');
            let monthString = '';
        if(month === 0){
            monthString = 'January';
        }else if(month === 1){
            monthString = 'February';
        }else if(month === 2){
            monthString = 'March';
        }else if(month === 3){
            monthString = 'April';
        }else if(month === 4){
            monthString = 'May';
        }else if(month === 5){
            monthString = 'June';
        }else if(month === 6){
            monthString = 'July';
        }else if(month === 7){
            monthString = 'August';
        }else if(month === 8){
            monthString = 'September';
        }else if(month === 9){
            monthString = 'October';
        }else if(month === 10){
            monthString = 'November';
        }else if(month === 11){
            monthString = 'December';
        }else{
            console.log('NOTWORKING');
            monthString = 'default';
        }
        monthHTML.innerHTML = monthString;
        yearHTML.innerHTML = year;
    }
    upLayout();
    // BUTTONS FUTURE AND PAST //
    const btnPast = document.querySelector('.pastBtn');
    const btnFuture = document.querySelector('.futureBtn');
    
    btnPast.addEventListener('click', past);
    function past(){
        month = month-1;
        //console.log(month);
        if(month == -1){
            yearConvert-=1;
            if(yearConvert < 0){
                month = 0;
                yearConvert = 0;
                
            }else{
                month = 11;
                year-=1;
            }
        }
        calendarDelete();
        calendarLoading();
        upLayout();
    }
    btnFuture.addEventListener('click', future);
    function future(){
        month = month+1;
        if(month == 12){
            month = 0;
            year+=1;
            yearConvert+=1;
            
        }
        calendarDelete();
        calendarLoading();
        upLayout();
    }

    //LOADING CALENDAR //
    function calendarLoading(){
        switch(month){
            case month=0:
                days31(month);
            break;
            case month=2:
                days31(month);
            break;
            case month=4:
                days31(month);
            break;
            case month=6:
                days31(month);
            break;
            case month=7:
                days31(month);
            break;
            case month=9:
                days31(month);
            break;
            case month=11:
                days31(month);
            break;
            case month=3:
                days30(month);
            break;
            case month=5:
                days30(month);
            break;
            case month=8:
                days30(month);
            break;
            case month=10:
                days30(month);
            break;
            case month = 1:
                for(let a = 1; a<=28; a++){
                    let startMonth = startingMonth[yearConvert][month];
                    document.querySelector(`.gridDay${startMonth+a}`).style.color = 'black';
                    document.querySelector(`.gridDay${startMonth+a-1}`).innerHTML = a;
                    if(a==day && currentMonth == month && currentYear == year){
                        document.querySelector(`.gridDay${startMonth+a-1}`).style.color = 'red';
                    }  
                }
            break;
            default:
                console.log('NOT WORKING');
            break;
        }
        //FUNCTIONS FOR DAYS IN MONTH // 
        function days31(i){
            for(let a = 1; a<=31; a++){
                
                let startMonth = startingMonth[yearConvert][month];
                //console.log(yearConvert);
                document.querySelector(`.gridDay${startMonth+a}`).style.color = 'black';
                document.querySelector(`.gridDay${startMonth+a-1}`).innerHTML = a;
                
                if(a==day && currentMonth == month && currentYear == year){
                    document.querySelector(`.gridDay${startMonth+a-1}`).style.color = 'red';
                }         
            }
        }
        function days30(i){
            for(let a = 1; a<=30; a++){
                let startMonth = startingMonth[yearConvert][month];
                document.querySelector(`.gridDay${startMonth+a}`).style.color = 'black';
                document.querySelector(`.gridDay${startMonth+a-1}`).innerHTML = a;
                if(a==day && currentMonth == month && currentYear == year){
                    document.querySelector(`.gridDay${startMonth+a-1}`).style.color = 'red';
                }  
            }
        }
        ////////////////////////////////////
    }
    //DELETE CALENDAR //
    function calendarDelete(){
        for(let i = 0; i<42; i++){
            let deleteGrid = document.querySelector(`.gridDay${i+1}`);
            
            deleteGrid.innerHTML = '';
        }
    }
    calendarLoading();
}
CALENDAR();
const gridDayEvent = document.querySelectorAll('div.gridDays');
    console.log(gridDayEvent[0]);
    for(let i= 0; i<42; i++){
        gridDayEvent[i].addEventListener('click', changeColor);
        /*gridDayEvent[i].addEventListener('mouseover', changeColorHover);
        gridDayEvent[i].addEventListener('mouseout', changeColorOut);*/
    }
    function changeColor(e){
        //console.log(e.target.className);
        if(e.altKey == true){
            for(let i= 0; i<42; i++){
                if(e.target.className == gridDayEvent[i].className){
                    gridDayEvent[i].style.background = 'green';
                }
            }
        }else if(e.ctrlKey == true){
            for(let i= 0; i<42; i++){
                if(e.target.className == gridDayEvent[i].className){
                    gridDayEvent[i].style.background = 'red';
                }
            }
        }
        else{
            for(let i= 0; i<42; i++){
                if(e.target.className == gridDayEvent[i].className){
                    gridDayEvent[i].style.background = 'rgba(145, 145, 145, 0.945)';
                    
                }
            }
        }
    }
    /*function changeColorHover(e){
        for(let i= 0; i<42; i++){
            if(e.target.className == gridDayEvent[i].className){
                gridDayEvent[i].style.background = 'rgba(195, 195, 195, 0.945)';
            }
        }
    }
    function changeColorOut(e){
        for(let i= 0; i<42; i++){
            if(e.target.className == gridDayEvent[i].className){
                gridDayEvent[i].style.background = 'rgba(145, 145, 145, 0.945)';
            }
        }
    }*/
/*function CalendarHtml(){
    createCalendarCont();
    function createCalendarCont(){
        const newDivCalendar = document.createElement('div');;   
        const calendarMonth = document.createElement('div');
            const buttonpast = document.createElement('button');
            const month = document.createElement('div');
            const year = document.createElement('div');
            const buttonfuture = document.createElement('button');
        const week = document.createElement('div');
            const monday = document.createElement('div');
            const tuesday = document.createElement('div');
            const wednesday = document.createElement('div');
            const thursday = document.createElement('div');
            const friday = document.createElement('div');
            const saturday = document.createElement('div');
            const sunday = document.createElement('div');

        newDivCalendar.className= 'calendar';
        calendarMonth.className = 'calendarMonth';
            buttonpast.className= 'pastBtn';
            month.className= 'month';
            year.className= 'year';
            buttonfuture.className= 'futureBtn';
        week.className = 'week';
            monday.className = 'weekday';
            tuesday.className = 'weekday';
            wednesday.className = 'weekday';
            thursday.className = 'weekday';
            friday.className = 'weekday';
            saturday.className = 'weekday';
            sunday.className = 'weekday';

        buttonpast.appendChild(document.createTextNode('PAST'));
        month.appendChild(document.createTextNode('DEFAULT'));
        year.appendChild(document.createTextNode('DEFAULT'));
        buttonfuture.appendChild(document.createTextNode('FUTURE'));
        
        monday.appendChild(document.createTextNode('Monday'));
        tuesday.appendChild(document.createTextNode('Tuesday'));
        wednesday.appendChild(document.createTextNode('Wednesday'));
        thursday.appendChild(document.createTextNode('Thursday'));
        friday.appendChild(document.createTextNode('Friday'));
        saturday.appendChild(document.createTextNode('Saturday'));
        sunday.appendChild(document.createTextNode('Sunday'));

        newDivCalendar.appendChild(calendarMonth);
            calendarMonth.appendChild(buttonpast);
            calendarMonth.appendChild(month);
            calendarMonth.appendChild(year);
            calendarMonth.appendChild(buttonfuture);
        newDivCalendar.appendChild(week);
            week.appendChild(monday);
            week.appendChild(tuesday);
            week.appendChild(wednesday);
            week.appendChild(thursday);
            week.appendChild(friday);
            week.appendChild(saturday);
            week.appendChild(sunday);
        //console.log(newDivCalendar);
        const body = document.querySelector('html body');
        const script = document.querySelector('body script');
        body.insertBefore(newDivCalendar, script);
    }
    
}
CalendarHtml();*/

/*function daysLayout(){
    
    //console.log(day);
    //console.log(week);
    const gridDay1 = document.querySelector('.gridDay1');
    const gridDay2 = document.querySelector('.gridDay2');
    const gridDay3 = document.querySelector('.gridDay3');
    const gridDay4 = document.querySelector('.gridDay4');
    const gridDay5 = document.querySelector('.gridDay5');
    const gridDay6 = document.querySelector('.gridDay6');
    const gridDay7 = document.querySelector('.gridDay7');
    
    const gridDay8 = document.querySelector('.gridDay8');
    const gridDay9 = document.querySelector('.gridDay9');
    const gridDay10 = document.querySelector('.gridDay10');
    const gridDay11 = document.querySelector('.gridDay11');
    const gridDay12 = document.querySelector('.gridDay12');
    const gridDay13 = document.querySelector('.gridDay13');
    const gridDay14 = document.querySelector('.gridDay14');
    
    const gridDay15 = document.querySelector('.gridDay15');
    const gridDay16 = document.querySelector('.gridDay16');
    const gridDay17 = document.querySelector('.gridDay17');
    const gridDay18 = document.querySelector('.gridDay18');
    const gridDay19 = document.querySelector('.gridDay19');
    const gridDay20 = document.querySelector('.gridDay20');
    const gridDay21 = document.querySelector('.gridDay21');
    
    const gridDay22 = document.querySelector('.gridDay22');
    const gridDay23 = document.querySelector('.gridDay23');
    const gridDay24 = document.querySelector('.gridDay24');
    const gridDay25 = document.querySelector('.gridDay25');
    const gridDay26 = document.querySelector('.gridDay26');
    const gridDay27 = document.querySelector('.gridDay27');
    const gridDay28 = document.querySelector('.gridDay28');*/
    
    //document.querySelector(`.gridDay${day}`).innerHTML = day;

    /* const weekDays ={
        monday:    ['1','8' ,'16','22','29','36'],
        tuesday:   ['2','9' ,'16','23','30','37'],
        wednesday: ['3','10','17','24','31','38'],
        thursday:  ['4','11','18','25','32','39'],
        friday:    ['5','12','19','26','33','40'],
        saturday:  ['6','13','20','27','34','41'],
        sunday:    ['7','14','21','28','35','42']
    }
    if(week === 1){
        for(let i=0; i<6;i++){
            const result = weekDays.monday[i] - day;
            console.log(result);
            if(result >= 0 && result <= 7){
                document.querySelector(`.gridDay${weekDays.monday[i]}`).innerHTML = day;
                let dayPastGrid = 0;
                let dayPastReal = 0;
                console.log(day);
                for(let a = day; a > 1 ; a--){
                    dayPastGrid = weekDays.monday[i] - 1;
                    dayPastReal = day - 1;
                    document.querySelector(`.gridDay${a+1}`).innerHTML = dayPastReal;
                    day-=1;
                }
                console.log('good');
            }else{
                //console.log('next');
            }
        }
    }else if(week === 2){
        for(let i=0; i<6;i++){
            const result = weekDays.tuesday[i] - day;
            console.log(result);
            if(result >= 0 && result <= 7){
                document.querySelector(`.gridDay${weekDays.tuesday[i]}`).innerHTML = day;
                let dayPastGrid = 0;
                let dayPastReal = 0;
                console.log(day);
                for(let a = day; a > 1 ; a--){
                    dayPastGrid = weekDays.tuesday[i] - 1;
                    dayPastReal = day - 1;
                    document.querySelector(`.gridDay${a+1}`).innerHTML = dayPastReal;
                    day-=1;
                }
                console.log('good');
            }else{
                //console.log('next');
            }
        }
    }else if(week === 3){
        for(let i=0; i<6;i++){
            const result = weekDays.wednesday[i] - day;
            console.log(result);
            if(result >= 0 && result <= 7){
                document.querySelector(`.gridDay${weekDays.wednesday[i]}`).innerHTML = day;
                let dayPastGrid = 0;
                let dayPastReal = 0;
                console.log(day);
                for(let a = day; a > 1 ; a--){
                    dayPastGrid = weekDays.wednesday[i] - 1;
                    dayPastReal = day - 1;
                    document.querySelector(`.gridDay${a+1}`).innerHTML = dayPastReal;
                    day-=1;
                }
                console.log('good');
            }else{
                //console.log('next');
            }
        }
    }else if(week === 4){
        for(let i=0; i<6;i++){
            const result = weekDays.thursday[i] - day;
            console.log(result);
            if(result >= 0 && result <= 7){
                document.querySelector(`.gridDay${weekDays.thursday[i]}`).innerHTML = day;
                let dayPastGrid = 0;
                let dayPastReal = 0;
                console.log(day);
                for(let a = day; a > 1 ; a--){
                    dayPastGrid = weekDays.thursday[i] - 1;
                    dayPastReal = day - 1;
                    document.querySelector(`.gridDay${a+1}`).innerHTML = dayPastReal;
                    day-=1;
                }
                console.log('good');
            }else{
                //console.log('next');
            }
        }
    }else if(week === 5){
        for(let i=0; i<6;i++){
            const result = weekDays.friday[i] - day;
            //console.log(result);
            if(result >= 0 && result <= 7){
                document.querySelector(`.gridDay${weekDays.friday[i]}`).innerHTML = day;
                let dayPastGrid = 0;
                let dayPastReal = 0;
                console.log(day);
                for(let a = day; a > 1 ; a--){
                    dayPastGrid = weekDays.friday[i] - 1;
                    dayPastReal = day - 1;
                    document.querySelector(`.gridDay${a+1}`).innerHTML = dayPastReal;
                    day-=1;
                }
                console.log('good');
            }else{
                //console.log('next');
            }
        }
    }else if(week === 6){
        for(let i=0; i<6;i++){
            const result = weekDays.saturday[i] - day;
            console.log(result);
            if(result >= 0 && result <= 7){
                document.querySelector(`.gridDay${weekDays.saturday[i]}`).innerHTML = day;
                let dayPastGrid = 0;
                let dayPastReal = 0;
                console.log(day);
                for(let a = day; a > 1 ; a--){
                    dayPastGrid = weekDays.saturday[i] - 1;
                    dayPastReal = day - 1;
                    document.querySelector(`.gridDay${a+1}`).innerHTML = dayPastReal;
                    day-=1;
                }
                console.log('good');
            }else{
                //console.log('next');
            }
        }
    }else if(week === 0){
        for(let i=0; i<6;i++){
            const result = weekDays.sunday[i] - day;
            //console.log(result);
            if(result >= 0 && result <= 7){
                document.querySelector(`.gridDay${weekDays.sunday[i]}`).innerHTML = day;
                let dayPastGrid = 0;
                let dayPastReal = 0;
                console.log(day);
                for(let a = day; a > 1 ; a--){
                    dayPastGrid = weekDays.sunday[i] - 1;
                    dayPastReal = day - 1;
                    document.querySelector(`.gridDay${a+1}`).innerHTML = dayPastReal;
                    day-=1;
                }
                console.log('good');
            }else{
                //console.log('next');
            }
        }
    }
}
daysLayout();*/