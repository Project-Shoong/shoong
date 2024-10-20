// 전역 변수 ===============================================================
// 전체 레이아웃
// contents의 각 tab
const members_tab = $('.plan_holder').children('section:eq(0)');
const destinations_tab = $('.plan_holder').children('section:eq(1)');
const date_tab = $('.plan_holder').children('section:eq(2)');
const places_tab = $('.plan_holder').children('section:eq(3)');
const index_tab = $('.plan_holder').children('section:eq(4)');
const schedules_tab = $('.plan').children('section');
// tab별 추가 화면
const member_invite = $('.detail').children('div:eq(0)');
const destination_choose = $('.detail').children('div:eq(1)');
const date_choose = $('.detail').children('div:eq(2)');
const place_choose = $('.detail').children('div:eq(3)');
const schedule_manage = $('.detail').children('div:eq(4)');
// tab별 index
const plan_indexes = $('.plan_holder').find('.index');
const member_index = members_tab.find('.index');
const destinations_index = destinations_tab.find('.index');
const date_index = date_tab.find('.index');
const places_index = places_tab.find('.index');
const index_index = index_tab.find('.index');
// 일정 짜기 버튼, 저장 버튼
const btn_schedule = $('.btn_schedule');
const btn_save = $('.btn_save');
// 지도 커버
const cover = $('.cover');

// 2. 도시 및 나라 선택
// 대륙 카테고리 버튼
const continentCategories = $('.continents').children('button');
const world = $('.continents').children('button:eq(0)');
const southeast_asia = $('.continents').children('button:eq(1)');
const asia = $('.continents').children('button:eq(2)');
const oceania = $('.continents').children('button:eq(3)');
const europe = $('.continents').children('button:eq(4)');
const america = $('.continents').children('button:eq(5)');
let continent = '전체';



// 전체 레이아웃 ===============================================================
// event
// tab 전환시 index의 커서 상태 변경
function changeCursorStyle(e) {
    plan_indexes.css('cursor', 'pointer');
    if(e.currentTarget!=index_tab.get(0)) {
        $(e.target).css('cursor','default');
    } else {
        member_index.css('cursor','default');
    }
}
$(function() {
    // header
    // header - hover시 tab 이동
    $('header').find('a').hover(function() {
        $('#contents').children('.holder').css('left','-247px');
    }, function() {
        $('#contents').children('.holder').css('left','-361px');
    })
    // tab
    // index - hover시 밑줄
    plan_indexes.hover(function() {
        $(this).children().css('text-decoration-line', 'underline')
    }, function() {
        $(this).children().css('text-decoration-line', 'none')
    })
    // index
    // index - click시 tab 전환
    member_index.click(function(e) {
        members_tab.css('top','0px');
        destinations_tab.css('top','calc(100vh - 295px)');
        date_tab.css('top','calc(100vh - 224px)');
        places_tab.css('top','calc(100vh - 153px)');

        member_invite.css('visibility', 'visible');
        destination_choose.css('visibility', 'hidden');
        date_choose.css('visibility', 'hidden');
        place_choose.css('visibility', 'hidden');
        cover.css('visibility', 'visible');

        changeCursorStyle(e);
    })      
    destinations_index.click(function(e) {
        members_tab.css('top','0px');
        destinations_tab.css('top','71px');
        date_tab.css('top','calc(100vh - 224px)');
        places_tab.css('top','calc(100vh - 153px)');

        member_invite.css('visibility', 'hidden');
        destination_choose.css('visibility', 'visible');
        date_choose.css('visibility', 'hidden');
        place_choose.css('visibility', 'hidden');
        cover.css('visibility', 'visible');

        changeCursorStyle(e);
    })      
    date_index.click(function(e) {
        members_tab.css('top','0px');
        destinations_tab.css('top','71px');
        date_tab.css('top','142px');
        places_tab.css('top','calc(100vh - 153px)');

        member_invite.css('visibility', 'hidden');
        destination_choose.css('visibility', 'hidden');
        date_choose.css('visibility', 'visible');
        place_choose.css('visibility', 'hidden');
        cover.css('visibility', 'visible');

        changeCursorStyle(e);
    })      
    places_index.click(function(e) {
        members_tab.css('top','0px');
        destinations_tab.css('top','71px');
        date_tab.css('top','142px');
        places_tab.css('top','213px');

        member_invite.css('visibility', 'hidden');
        destination_choose.css('visibility', 'hidden');
        date_choose.css('visibility', 'hidden');
        place_choose.css('visibility', 'visible');
        cover.css('visibility', 'hidden');
        
        changeCursorStyle(e);
    })
    index_tab.click(function(e) {
        index_tab.css('visibility', 'hidden');
        members_tab.css('visibility','visible');
        destinations_tab.css('visibility','visible');
        date_tab.css('visibility','visible');
        places_tab.css('visibility','visible');

        members_tab.css('top','0px');
        destinations_tab.css('top','calc(100vh - 295px)');
        date_tab.css('top','calc(100vh - 224px)');
        places_tab.css('top','calc(100vh - 153px)');

        member_invite.css('visibility', 'visible');
        destination_choose.css('visibility', 'hidden');
        date_choose.css('visibility', 'hidden');
        place_choose.css('visibility', 'hidden');
        schedule_manage.css('visibility', 'hidden');
        cover.css('visibility', 'visible');


        btn_schedule.css('visibility', 'visible');
        btn_save.css('visibility', 'hidden');

        changeCursorStyle(e);
    })
    btn_schedule.click(function() {
        index_tab.css('visibility', 'visible');
        members_tab.css('top','calc(100vh - 153px)');
        destinations_tab.css('top','calc(100vh - 153px)');
        date_tab.css('top','calc(100vh - 153px)');
        places_tab.css('top','calc(100vh - 153px)');

        setTimeout(function() {
            members_tab.css('visibility','hidden');
            destinations_tab.css('visibility','hidden');
            date_tab.css('visibility','hidden');
            places_tab.css('visibility','hidden');
        }, 400)
        
        member_invite.css('visibility', 'hidden');
        destination_choose.css('visibility', 'hidden');
        date_choose.css('visibility', 'hidden');
        place_choose.css('visibility', 'hidden');
        schedule_manage.css('visibility', 'hidden');
        cover.css('visibility', 'hidden');

        $(this).css('visibility', 'hidden');
        btn_save.css('visibility', 'visible');

        // 기간 불러오기
        bindPeriod();
    })
})

// 1. 그룹 초대 ===============================================================
// 그룹 초대 - event
$(function() {
    // 초대 버튼 - click시 이벤트 제거
    $(document).on("click", ".btn_invite", function(e) {
        $(e.currentTarget).addClass("btn_clicked");
        console.log("click");
        $(this).off("click");
    })
})
// 그룹 초대 - 요청
// 사용자 검색
function searchUser() {
    const keyword = $('#search_user').val();
    if (keyword.length > 0) {
        $.ajax({
            url: "/user/search",
            type: "GET",
            data: {"keyword": keyword},
            success: function (userList) {
                $('#userList').replaceWith(userList);
            }
        })
    }
    else {
        $('#userList').html('');
    }
}
// 그룹원 목록 불러오기
window.onload = getGroupList();
// member_index.trigger("click");
function getGroupList() {
    // const planId = /*[[${planId}]]*/'';
    // $.ajax({
    //     url: "/group/list",
    //     type: "GET",
    //     data: {"planId": planId},
    //     success: function (groupMemberList) {
    //         $('#groupMemberList').replaceWith(groupMemberList);
    //     }
    // })
}

// 2. 도시 및 나라 선택 ===============================================================
// 도시 및 나라 선택 - event
$(function() {
    // 대륙 카테고리 - click
    $('.btn_continent').click(function() {
        continentCategories.addClass('btn_unclicked');
        $(this).removeClass('btn_unclicked');
        
        continent = $(this).html(); // == '전체' ? '' : $(this).html();
        // ajax 호출 - 목적지 검색(카테고리명 전달)
        searchDefaultDestination();
    });
    // 기본목적지 추가 - click
    $(document).on("click", ".destination", function(e) {
        const destinationId = $(e.currentTarget).children('input').val();
        addDefaultDestination(destinationId);
    })
    // 선택된 기본목적지 삭제 - click
    $(document).on("click", ".selected_destination", function(e) {
        const destinationId = $(e.currentTarget).children('input').val();
        removeDefaultDestination(destinationId);
    })
})

// 도시 및 나라 선택
// 목적지 검색
window.onload = searchDefaultDestination();
function searchDefaultDestination() {
    const keyword = $('#search_destination').val();
    $.ajax({
        url: "/defaultdestination/list",
        type: "GET",
        data: {"keyword": keyword, "continent": continent},
        success: function (defaultDestinationList) {
            $('#defaultDestinationList').replaceWith(defaultDestinationList)
        }
    })
}

// 선택 기본목적지 전체 조회
function getSelectedDefaultDestinations() {
    $('.selected_destination_list').html("");
    for(let value of selectedDefaultDestinations.values()) {
        let str = "";
        str += `<div class="selected_destination">
                    <input type="hidden" value="${value.destinationId}">
                    <div class="selected_destination_img">
                        <img src="/images/default_destination.jpg" alt="" style="background-color: #000">
                    </div>
                    <div class="selected_destination_name">
                        <span>${value.cityKor}</span>
                    </div>
                </div>`;
        $('.selected_destination_list').append(str);
    }
}

// 기본목적지 추가
function addDefaultDestination(destinationId) {
    $.ajax({
        url: "/defaultdestination/get",
        type: "GET",
        data: {"destinationId": destinationId},
        success: function (data) {
            if(!selectedDefaultDestinations.get(Number(data.destinationId))) {
                selectedDefaultDestinations.set(data.destinationId, data); 
               
            
                let str = "";
                str += `<div class="selected_destination">
                            <input type="hidden" value="${data.destinationId}">
                            <div class="selected_destination_img">
                                <img src="/images/default_destination.jpg" alt="" style="background-color: #000">
                            </div>
                            <div class="selected_destination_name">
                                <span>${data.cityKor}</span>
                            </div>
                        </div>`;
                $('.selected_destination_list').append(str);
            }
        }
    })
}

// 기본목적지 삭제 후 조회
function removeDefaultDestination(destinationId) {
    selectedDefaultDestinations.delete(Number(destinationId));
    getSelectedDefaultDestinations();
}


// 3. 날짜 선택 ===============================================================
// 날짜 추가
function addDate(start, end) {
    console.log("이게 불러진다ㅗㄱ??")
    selectedDates.set("startDate", start);
    selectedDates.set("endDate", end);
    
    dateArr = getDatesStartToLast(start, end);

    bindDates();
}
// 날짜 초기화
addDate(timeEx, timeEx);

// dateMap 초기화
// function initDateMap() {
//     const map = new Map();

//     for(const element of dateArr) {
//         map.set(element, )
//     }
// }

// 날짜 불러오기


// 사이 모든 날짜 배열로 뽑기
function getDatesStartToLast(startDate, endDate) {
	var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
	if(!(regex.test(startDate) && regex.test(endDate))) return "Not Date Format";
	var result = [];
	var curDate = new Date(startDate);
	while(curDate <= new Date(endDate)) {
        console.log(curDate)
        console.log(curDate.toISOString())
        console.log(curDate.toISOString().split("T")[0])
		result.push(curDate.toISOString().split("T")[0]);
		curDate.setDate(curDate.getDate() + 1);
	}
	return result;
}



// 4. 장소 선택 ===============================================================
$(function() {
    // 장소 검색 - keyup
    $('#search_place').keydown(function (e){
        if(e.keyCode===13) {
            const query = $(this).val();
            findPlaces(query);
        }
    })
    // 장소 추가 - click
    $(document).on("click", ".btn_add_place", function(e) {
        // place_id 값 참조
        const id = $(e.currentTarget).siblings('input').val();
    
        // button 색 변경 및 hover 제거
        $(e.currentTarget).addClass("btn_clicked btn_no_hover");
    
        if(!selectedPlaces.get(id)) {
        // Places API - Details
            getPlaceDetails(id).then((response) => {
                const place = parsePlace(response);
    
                bindSelectPlace(place);
                addPlace(place);
            });
        }
    })
    // 장소 삭제 - hover
    $(document).on("mouseenter", ".selectedPlace", function(e) {
        $(e.currentTarget).children('.place_remove').css('visibility', 'visible');
    })
    $(document).on("mouseleave", ".selectedPlace", function(e) {
        $(e.currentTarget).children('.place_remove').css('visibility', 'hidden');
    })
    // 장소 삭제 - click
    $(document).on("click", ".place_remove", function(e) {
        const id = $(e.currentTarget).siblings('input').val();
        removePlace(id);
    })
})

// 장소 선택
// 장소 추가
function addPlace(place) {
    console.log(place.id);
    console.log(place);
    selectedPlaces.set(place.id, place);
    // 선택 목적지 목록 추가
    const destination = {
        // destinationId: destinationKey,
        cityKor: place.city,
        countryKor: place.country,
        countryCode: place.countryCode,
        continent: place.continent
    }
    destinationKey--;
    selectedDestinations.add(JSON.stringify(destination));
    console.log(selectedDestinations);
}

// 장소 삭제
function removePlace(id) {
    selectedPlaces.delete(id);
    removeSelectedPlace(id);
    deselectSearchedPlace(id);
    deleteSelectedMarker(id);
}


// 5. 일정 짜기 ===============================================================
$(function() {
    // 일정 짜기
    // 일별 조회 - click
    $(document).on("click", ".schedule_info", function(e) {
        const itinerarieList = $(e.currentTarget).parent().siblings();
        itinerarieList.toggle();
    })
    // 일정 - hover
    $(document).on("mouseenter", ".itinerary", function(e) {
        $(e.currentTarget).children('.itinerary_remove').css('visibility', 'visible');
    })
    $(document).on("mouseleave", ".itinerary", function(e) {
        $(e.currentTarget).children('.itinerary_remove').css('visibility', 'hidden');
    })
    // 일정 - click
    // let lastItineraryEvent = null;       =>      timepicker 쪽으로 이동
    $(document).on("click", ".itinerary", function(e){
        // let iId;
        // if(lastItineraryEvent!=null || lastItineraryEvent!=undefined) {
        //     iId = $(lastItineraryEvent).children('input').val();
        //     let value = $('#schedule_search_place').val();
        //     itineraries.get(Number(iId)).lastKeyword = (value==null || value==undefined) ? '' : value;
    
        //     const startTime = parseTimeValueToTime(itineraries.get(Number(iId)).startTime);
        //     const endTime = parseTimeValueToTime(itineraries.get(Number(iId)).endTime);
        //     $('.time_choose').find('input:eq(0)').val(startTime);
        //     $('.time_choose').find('input:eq(1)').val(endTime);
        // }
    
        // $('.schedule_manage').css('visibility', 'visible');
        // // e를 .schedule_manage에 전달
        // lastItineraryEvent = e.currentTarget;
        // iId = $(lastItineraryEvent).children('input').val();
        // const keyword = itineraries.get(Number(iId)).lastKeyword;
        // $('#schedule_search_place').val(keyword);
        // searchSelectedPlaces(keyword);

        // 일정 관리 화면 띄우기
        $('.schedule_manage').css('visibility', 'visible');
        // 일정의 event 객체 저장
        lastItineraryEvent = e.currentTarget;
        // 일정 Key 불러오기
        const iId = $(lastItineraryEvent).children('input').val();
        console.log("선택 일정 Key : " + iId);
        // 일정 검색어 목록 불러오기
        const keyword1 = itineraries.get(Number(iId)).lastKeyword;
        $('#schedule_search_place').val(keyword1);
        searchSelectedPlaces(keyword1);
        // 일정 시간 불러오기
        const startTime = parseTimeValueToTime(itineraries.get(Number(iId)).startTime);
        const endTime = parseTimeValueToTime(itineraries.get(Number(iId)).endTime);
        $('.time_choose').find('input:eq(0)').val(startTime);
        $('.time_choose').find('input:eq(1)').val(endTime);
    })
    // $(document).click(function(e) {
    //     if(!$(e.target).closest('section:first-of-type, .itinerary, .schedule_manage, .ui-timepicker-container').length) {
    //         $('.schedule_manage').css('visibility', 'hidden');
    //     }
    // })
    // $('#map').mousedown(function() {
    //     $('.schedule_manage').css('visibility', 'hidden');
    // })
    // 일정 추가 - click
    $(document).on("click", ".itinerary_add", function(e) {
        // 새로운 일정 화면 바인딩 및 객체 추가
        addItinerary(e);
        addItineraryDate(e);
        searchSelectedPlaces('');
        $('#schedule_search_place').val('');
        
        // 일정관리 탭 띄우기
        schedule_manage.css('visibility', 'visible');
        // 일정관리 시간 초기화 - 현재시간
        const hour = String(new Date().getHours()).padStart(2, '0');
        const minute = String(new Date().getMinutes()).padStart(2, '0');
        const time = `${hour}:${minute}:00`;
        console.log(time);
        $('.time_choose').find('input').val(parseTimeValueToTime(time));
        // 일정의 event 객체 저장
        lastItineraryEvent = $(e.currentTarget).siblings('.itineraries').children().last().children('.itinerary').get(0);
        const iId = $(lastItineraryEvent).children('input').val();
        console.log("선택 일정 Key : " + iId);

        // $('.schedule_place').children('.place_list').html('');
        
        // 현재 관리 일정
        // $(e.currentTarget).siblings('.itineraries').children().last().children('.itinerary').get(0);
        // $('.time_choose').find('input').val(parseTimeWithDayAndNight(new Date()));
    })
    // 일정 삭제 - click
    $(document).on("click", ".itinerary_remove", function(e) {
        removeItinerary(e);
    })
    
    // 일정 관리
    // 장소 설정
    // 장소 검색
    $('#schedule_search_place').keyup(function (e){
        // 검색 키워드 불러오기
        let keyword = $(this).val();
        keyword = keyword.length < 1 ? '': keyword;
        // 검색 키워드를 일정 객체에 입력
        const iId = $(lastItineraryEvent).children('input').val();
        itineraries.get(Number(iId)).lastKeyword = keyword;
        // 검색
        searchSelectedPlaces(keyword);
    })
    // 장소 선택
    $(document).on("click", ".btn_add_place_schedule", function(e) {
        const placeId = $(e.currentTarget).siblings('input').val();
        // bindIdBySelectedPlace(placeId, lastItineraryEvent);
        addItineraryPlace(lastItineraryEvent, placeId)
        bindItineraryPlace(lastItineraryEvent);
    })
    
    // 비용 관리
    // 비용 - hover
    $(document).on("mouseenter", ".cost", function(e) {
        $(e.currentTarget).children('.cost_remove').css('visibility', 'visible');
    })
    $(document).on("mouseleave", ".cost", function(e) {
        $(e.currentTarget).children('.cost_remove').css('visibility', 'hidden');
    })
    // 비용 추가 - click
    $(document).on("click", ".cost_add", function(e) {
        addCost(e);
    })
    // 비용 삭제 - click
    $(document).on("click", ".cost_remove", function(e) {
        removeCost(e);
    })
    // 항목명 변경
    $(document).on("click", ".cost_name, .cost_payer, .cost_amount", function(e) {
        $(e.currentTarget).children('input').css('visibility', 'visible');
        $(e.currentTarget).children('input').focus();
        $(e.currentTarget).children('span').css('visibility', 'hidden');
    })
    $(document).on("blur", ".cost_name", function(e) {
        $(e.currentTarget).children('input').css('visibility', 'hidden');
        $(e.currentTarget).children('span').css('visibility', 'visible');
        const value = $(e.currentTarget).children('input').val();
        $(e.currentTarget).children('span').html(value);
        addCostContent(e);
    })
    $(document).on("keyup", ".cost_name", function(e) {
        if(e.keyCode===13) {
            $(e.currentTarget).children('input').css('visibility', 'hidden');
            $(e.currentTarget).children('span').css('visibility', 'visible');
            const value = $(e.currentTarget).children('input').val();
            $(e.currentTarget).children('span').html(value);
            addCostContent(e);
        }
    })
    $(document).on("blur", ".cost_payer", function(e) {
        $(e.currentTarget).children('input').css('visibility', 'hidden');
        $(e.currentTarget).children('span').css('visibility', 'visible');
        const value = $(e.currentTarget).children('input').val();
        if(value.length > 0) {
            $(e.currentTarget).children('span').css('color', '#828282');
            $(e.currentTarget).children('span').html(value);
        }
        else {
            $(e.currentTarget).children('span').css('color', '#E1E1E1');
            $(e.currentTarget).children('span').html("( 이름 )");
        }
        addCostPayer(e);
    })
    $(document).on("keyup", ".cost_payer", function(e) {
        if(e.keyCode===13) {
            $(e.currentTarget).children('input').css('visibility', 'hidden');
            $(e.currentTarget).children('span').css('visibility', 'visible');
            const value = $(e.currentTarget).children('input').val();
            if(value.length > 0) {
                $(e.currentTarget).children('span').css('color', '#828282');
                $(e.currentTarget).children('span').html(value);
            }
            else {
                $(e.currentTarget).children('span').css('color', '#E1E1E1');
                $(e.currentTarget).children('span').html("( 이름 )");
            }
            addCostPayer(e);
        }   
    })
    $(document).on("blur", ".cost_amount", function(e) {
        $(e.currentTarget).children('input').css('visibility', 'hidden');
        $(e.currentTarget).children('span').css('visibility', 'visible');
        const value = $(e.currentTarget).children('input').val();
        if(value.length > 0) {
            $(e.currentTarget).children('span').css('color', '#828282');
            $(e.currentTarget).children('span').html(value+"원");
        }
        else {
            $(e.currentTarget).children('span').css('color', '#828282');
            $(e.currentTarget).children('span').html("예상 금액");
        }
        addCostAmount(e);
    })
    $(document).on("keyup", ".cost_amount", function(e) {
        if(e.keyCode===13) {
            $(e.currentTarget).children('input').css('visibility', 'hidden');
            $(e.currentTarget).children('span').css('visibility', 'visible');
            const value = $(e.currentTarget).children('input').val();
            if(value.length > 0) {
                $(e.currentTarget).children('span').css('color', '#828282');
                $(e.currentTarget).children('span').html(value+"원");
            }
            else {
                $(e.currentTarget).children('span').css('color', '#828282');
                $(e.currentTarget).children('span').html("예상 금액");
            }
            addCostAmount(e);
        }   
    })
})

// 일정 짜기
// 기간 불러오기
function bindPeriod() {
    const dates = $('#daterangepicker').val();
    $('.period').html(dates);
}
// 일별 토글 불러오기
function bindDates() {
    $('.schedules').html('');
    for(const element of dateArr) {
        const dayNum = new Date(element).getDay();
        const day = dayOfWeek[dayNum];
        const date = element.split('-')[1]+'.'+element.split('-')[2];

        let str = "";
        str += `<div class="schedule">
                    <input type="hidden" value="${element}">
                    <div>
                        <div class="schedule_info">
                            <div class="schedule_day">
                                <span>${day}</span>
                            </div>
                            <div class="schedule_date">
                                <span>${date}</span>
                            </div>
                            <div class="schedule_cost">
                                <span></span>
                            </div>
                            <div class="schedule_toggle">
                                <img src="/images/toggle_up.png" alt="">
                            </div>
                        </div>
                        <span class="schedule_separator"></span>
                    </div>
                    <div class="itineraries">
                        ${bindItinerariesByDate(element)}
                    </div>
                    <div class="itinerary_add">
                        <div>
                            <img src="/images/add.png" alt="">
                        </div>
                        <span>일정 추가</span>
                    </div>
                </div>`
        $('.schedules').append(str);
    }
}
// 날짜에 따라 일정 바인딩
function bindItinerariesByDate(date) {
    let str = "";

    const arrItineraries = [...itineraries.entries()];
    arrItineraries.sort((a, b) => {
        if (a[1].date < b[1].date) return -1;
        if (a[1].date > b[1].date) return 1;
        if (a[1].startTime < b[1].startTime) return -1;
        if (a[1].startTime > b[1].startTime) return 1;
        if (a[1].endTime < b[1].endTime) return -1;
        if (a[1].endTime > b[1].endTime) return 1;
        return 0;
    });
    itineraries = new Map(arrItineraries);

    for(const [itinerary_key, itinerary_value] of itineraries) {
        if(date === itinerary_value.date) {
            const pId = itinerary_value.placeId;
            const pName = !pId ? "장소명" : selectedPlaces.get(pId).name;
            const pCity = !pId ? "도시명" : selectedPlaces.get(pId).city;
            const color = !pId ? "#00A538" : selectedPlaces.get(pId).color;
            const startTime = parseTimeKor(itinerary_value.startTime);
            const endTime = parseTimeKor(itinerary_value.endTime);

            str += `<div>
                        <div class="itinerary">
                            <input type="hidden" value="${itinerary_key}">
                            <span class="itinerary_type" style="background-color:${color}"></span>
                            <div class="itinerary_info">
                                <span class="itinerary_place">${pName}</span>
                                <span class="itinerary_destination">${pCity}</span>
                            </div>
                            <div class="itinerary_times">
                                <span class="itinerary_start_time">${startTime}</span>
                                <span>~</span>
                                <span class="itinerary_end_time">${endTime}</span>
                            </div>
                            <div class="itinerary_remove">
                                <img src="/images/remove.png" alt="">
                            </div>
                        </div>
                    </div>`;
        }
    }
    return str;
}
// 날짜 파싱
function parseTimeKor(time) {
    const arr = time.split(":");
    const hour = arr[0];
    const minute = arr[1];

    return `${hour}시 ${minute}분`
}

// 일정 추가
function addItinerary(e) {
    // itineraries.get(date).push(1);
    // 일정 화면에 추가
    let str = '';
    str += `<div>
                <div class="itinerary">
                    <input type="hidden" value="${itineraryKey}">
                    <span class="itinerary_type"></span>
                    <div class="itinerary_info">
                        <span class="itinerary_place">장소명</span>
                        <span class="itinerary_destination">도시명</span>
                    </div>
                    <div class="itinerary_times">
                        <span class="itinerary_start_time">${parseTimeWithDayAndNight(new Date())}</span>
                        <span>~</span>
                        <span class="itinerary_end_time">${parseTimeWithDayAndNight(new Date())}</span>
                    </div>
                    <div class="itinerary_remove">
                        <img src="/images/remove.png" alt="">
                    </div>
                </div>
            </div>`;
    $(e.currentTarget).prev().append(str);

    // 일정 map에 일정 객체 추가
    // itineraries.set(itineraryKey, new Map());
    itineraries.set(itineraryKey, {});

    const itinerary = itineraries.get(itineraryKey);
    itinerary.itineraryKey = itineraryKey;
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    itinerary.startTime = `${hour}:${minute}:00`;
    itinerary.endTime = `${hour}:${minute}:00`;
    // $('.time_choose').find(span).html()
    itinerary.lastKeyword = '';
    
    // // addCost
    // str = '';
    // str += `<div class="cost">
    //             <input type="hidden" value="${costKey}">
    //             <span class="cost_separator"></span>
    //             <div class="cost_name">
    //                 <span>항목명</span>
    //                     <input type="text">
    //                 </div>
    //                 <div class="cost_payer">
    //                     <span>( 이름 )</span>
    //                     <input type="text">
    //                 </div>
    //                 <div class="cost_amount">
    //                     <span>예상 금액</span>
    //                     <input type="text">
    //                 </div>
    //             <div class="cost_remove">
    //                 <img src="/images/remove.png" alt="">
    //             </div>
    //         </div>`;
    // $('.cost_list').append(str);
    // costs.get(Number(costKey)).set("itineraryId", itineraryKey);

    itineraryKey--;
}
// 일정 삭제
function removeItinerary(e) {
    const itineraryId = $(e.currentTarget).siblings('input').val();
    itineraries.delete(Number(itineraryId));

    $(e.currentTarget).parent().parent().remove();
}
// 일정 날짜 설정
function addItineraryDate(e) {
    const date = $(e.currentTarget).siblings('input').val();
    const itineraryId = $(e.currentTarget).prev().children().last().find('input').val();
    // itineraries.get(Number(itineraryId)).set("date", date);
    console.log(date)
    itineraries.get(Number(itineraryId)).date = date;
}
// 검색 장소 선택하여 ID 가져오기
function bindIdBySelectedPlace(placeId, lastItineraryEvent) {
    let str = "";   
    str += `<input type="hidden" value="${placeId}">`;
    $(lastItineraryEvent).prepend(str);
}
// 검색 장소 선택시 객체에 추가
function addItineraryPlace(itinerary, placeId) {
    const itineraryId = $(itinerary).children('input').val();
    // itineraries.get(Number(itineraryId)).set("placeId", placeId)
    console.log(placeId)
    itineraries.get(Number(itineraryId)).placeId = placeId;
}
// 검색 장소 선택시 장소 event 객체를 통해 일정 이름 주소 등 바인딩
function bindItineraryPlace(itinerary) {
    const $itinerary = $(itinerary);
    const itineraryId = $itinerary.children('input').val();
    // const id = itineraries.get(Number(itineraryId)).get("placeId");
    const id = itineraries.get(Number(itineraryId)).placeId;
    const type = getColorByPlaceType(selectedPlaces.get(id).type);
    const name = selectedPlaces.get(id).name;
    const address = `${selectedPlaces.get(id).country} ${selectedPlaces.get(id).city}`;

    $itinerary.children('.itinerary_type').css("background-color", type);
    $itinerary.find('.itinerary_place').html(name);
    $itinerary.find('.itinerary_destination').html(address);
}
// 검색 목록 바인딩
function searchSelectedPlaces(keyword) {
    $('.schedule_place').children('.place_list').html('');
    for(const value of selectedPlaces.values()) {
       if(value.name.indexOf(keyword)!=-1 ||
        value.city.indexOf(keyword)!=-1 ||
        value.country.indexOf(keyword)!=-1 ||
        value.continent.indexOf(keyword)!=-1 ||
        value.type.indexOf(keyword)!=-1) {
            let str = "";
            if($('.schedule_manage').children('.place_list').children().length > 0) {
                str += '<span class="place_separator"></span>';
            }
            str +=	`<div class="place">
                        <input type="hidden" value="${value.id}"></input>
                        <div class="place_img">
                            <img src="${value.photo}" alt="">
                        </div>
                        <div class="place_info">
                            <div class="place_name">
                                <span>${value.name}</span>
                                <div class="place_type" style="background-color:${getColorByPlaceType(value.type)}"><span>${value.type}</span></div>
                            </div>
                            <div class="place_ratings">
                                <div class="img_rating">
                                    <img src="/images/rating.png" alt="">
                                </div>
                                <span class="place_rating">${value.rating}</span>
                                <span class="place_ratings_total">(${value.ratingCnt})</span>
                            </div>
                            <span class="place_address">${value.country} ${value.city}</span>
                        </div>
                        <div class="btn btn_add_place_schedule">
                            <span>선&nbsp&nbsp택</span>
                        </div>
                    </div>`;
            $('.schedule_place').children('.place_list').append(str);
        }
    }
}
// 일정시간 추가
function addItineraryTime(itinerary, time, key) {
    if(itinerary !== null) {
        console.log("init "+itinerary)
        // "12:00:00"
        const timeStr = parseTime(time);
    
        const itineraryId = $(itinerary).children('input').val();
        // 일정맵에 넣기
        // itineraries.get(Number(itineraryId)).set(key, timeStr);
        if(key==="startTime") {
            itineraries.get(Number(itineraryId)).startTime = timeStr;
        } else {
            itineraries.get(Number(itineraryId)).endTime = timeStr;
        }
    }
}
// 일정 시간 바인딩
function bindItineraryTime(itinerary, time, key) {
    if(itinerary !== null) {
        const timeStr = parseTimeWithDayAndNight(time)
    
        if(key==="startTime") {
            $(itinerary).find('.itinerary_start_time').html(timeStr);
        } else {
            $(itinerary).find('.itinerary_end_time').html(timeStr);
        }
    }
}
// 비용 추가
function addCost(e) {
    // itineraries.get(date).push(1);
    let str = '';
    str += `<div class="cost">
                <input type="hidden" value="${costKey}">
                <span class="cost_separator"></span>
                <div class="cost_name">
                    <span>항목명</span>
                        <input type="text">
                    </div>
                    <div class="cost_payer">
                        <span>( 이름 )</span>
                        <input type="text">
                    </div>
                    <div class="cost_amount">
                        <span>예상 금액</span>
                        <input type="text">
                    </div>
                <div class="cost_remove">
                    <img src="/images/remove.png" alt="">
                </div>
            </div>`;
    $(e.currentTarget).prev().append(str);

    // costs.set(costKey, new Map());
    costs.set(costKey, {});

    const itineraryId = $(lastItineraryEvent).children('input').val();
    
    // costs.get(Number(costKey)).set("itineraryId", itineraryId);
    costs.get(Number(costKey)).itineraryId = itineraryId;
    costKey--;
    console.log(costs);
}
// 비용 삭제
function removeCost(e) {
    const costId = $(e.currentTarget).siblings('input').val();
    costs.delete(Number(costId));

    $(e.currentTarget).parent().remove();
}
function addCostContent(e) {
    const costId = $(e.currentTarget).siblings('input').val();
    const value = $(e.currentTarget).children('input').val();
    console.log(costs.get(Number(costId)));
    // costs.get(Number(costId)).set("content", value);
    costs.get(Number(costId)).content = value;
}
function addCostPayer(e) {
    const costId = $(e.currentTarget).siblings('input').val();
    const value = $(e.currentTarget).children('input').val();
    // costs.get(Number(costId)).set("payer", value);
    costs.get(Number(costId)).payer = value;
}
function addCostAmount(e) {
    const costId = $(e.currentTarget).siblings('input').val();
    const value = $(e.currentTarget).children('input').val();
    // costs.get(Number(costId)).set("amount", Number(value));
    costs.get(Number(costId)).amount = value;
}



// 저장하기 ================================================================
$(function() {
    $('.btn_save').click(function() {
        console.log(selectedDefaultDestinations);
        console.log(selectedDestinations);
        console.log(selectedDates);
        console.log(selectedPlaces);
        console.log(itineraries);
        console.log(itineraryKey);
        console.log(costs);
        console.log(costKey);
    })
    $('.btn_save').click(function() {
        const selectedDefaultDestinationsObj = Object.fromEntries(selectedDefaultDestinations);
        const selectedDatesObj = Object.fromEntries(selectedDates);
        const selectedPlacesObj = Object.fromEntries(selectedPlaces);
        const itinerariesObj = Object.fromEntries(itineraries);
        const costsObj = Object.fromEntries(costs);
        console.log(JSON.stringify({"selectedDefaultDestinations": selectedDefaultDestinationsObj})); 
        console.log(JSON.stringify({"selectedDestinations":  [...selectedDestinations]})); 
        console.log(JSON.stringify({"selectedDates": selectedDatesObj})); 
        console.log(JSON.stringify({"selectedPlaces": selectedPlacesObj})); 
        console.log(JSON.stringify({"itineraries": itinerariesObj})); 
        console.log(JSON.stringify({"costs": costsObj})); 
        $.ajax({
                url : "/plan/write",
                type : "POST",
                contentType : "application/json",
                data : JSON.stringify({
                    "selectedDefaultDestinations": selectedDefaultDestinationsObj, 
                    "selectedDestinations": [...selectedDestinations], 
                    "selectedDates": selectedDatesObj, 
                    "selectedPlaces": selectedPlacesObj, 
                    "itineraries": itinerariesObj, 
                    "costs": costsObj}),
                success : function(data) {
                    window.location.href = "/user/myPlan"
                }
        })
    })
})