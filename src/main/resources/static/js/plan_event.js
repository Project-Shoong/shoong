// tab
// contents의 각 tab 변수
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
// 일정 버튼
const btn_schedule = $('.btn_schedule');
const btn_save = $('.btn_save');

// index - tab 전환시 커서 변경 이벤트
function changeCursorStyle(e) {
    plan_indexes.css('cursor', 'pointer');
    if(e.currentTarget!=index_tab.get(0)) {
        $(e.target).css('cursor','default');
    } else {
        member_index.css('cursor','default');
    }
}

function inviteOff(e) {
	$(e.currentTarget).off('click.invite');
}

$(function() {
    // header
    // header - hover, tab 이동
    $('header').find('a').hover(function() {
        $('#contents').children('.holder').css('left','0px');
    }, function() {
        $('#contents').children('.holder').css('left','-122px');
    })

    // tab
    // index - hover, 밑줄
    plan_indexes.hover(function() {
        $(this).children().css('text-decoration-line', 'underline')
    }, function() {
        $(this).children().css('text-decoration-line', 'none')
    })

    // index - click, tab 전환
    member_index.click(function(e) {
        members_tab.css('top','0px');
        destinations_tab.css('top','calc(100vh - 295px)');
        date_tab.css('top','calc(100vh - 224px)');
        places_tab.css('top','calc(100vh - 153px)');

        member_invite.css('visibility', 'visible');
        destination_choose.css('visibility', 'hidden');
        date_choose.css('visibility', 'hidden');
        place_choose.css('visibility', 'hidden');

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
        schedule_manage.css('visibility', 'visible');
    
        $(this).css('visibility', 'hidden');
        btn_save.css('visibility', 'visible');
    })

    // 그룹 초대
    // 초대 버튼 - click
    $(document).on("click", ".btn_invite", function(e) {
        $(e.currentTarget).css({'background-color':'#828282'
                    ,'cursor':'default'
        });
		console.log("click");
        $(this).off("click");
    })
})

