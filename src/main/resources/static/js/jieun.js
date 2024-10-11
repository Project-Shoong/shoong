function likedPlan(heartElement) {
	// planId 값 가져오기
	let planId = heartElement.nextElementSibling.value; 
	
	// planId 값이 제대로 설정됐는지 확인
	console.log("planId: " + planId);
	
	//좋아요 카운트 span.like_plan_num
	let likeCount = heartElement.nextElementSibling.nextElementSibling;
	
	//좋아요 하트 이미지
	let heartImg = heartElement.innerHTML.trim();
	let heartF = '<img src="../images/like.png" alt="">';
	let heartT = '<img src="../images/like_on.png" alt="">';
	
	//컨트롤러 전송용
	let likedCheck = heartImg === heartF ? 1 : 0;
	
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "/plan/likedPlan", true);
	
	// POST 데이터 전송을 위해 헤더 설정
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 

	// 요청 상태가 변경될 때 호출되는 콜백 함수
    xhr.onreadystatechange = function () {		
        if (xhr.readyState === 4 && xhr.status === 200) {
			//빈 하트를 클릭했을 때 (좋아요 생성)
			if(heartImg == heartF) {
				//채워진 하트로 변경
				heartElement.innerHTML = heartT;
				// 좋아요 수 증가
				likeCount.innerText = parseInt(likeCount.innerText) + 1;
			} 
			//채워진 하트를 클릭했을 때 (좋아요 취소)
			else {
				//빈 하트로 변경
				heartElement.innerHTML = heartF;
				// 좋아요 수 감소
				likeCount.innerText = parseInt(likeCount.innerText) - 1;

            } 
		}
    }
	//초기 전송
    xhr.send("planId=" + encodeURIComponent(planId) + "&likedCheck=" + encodeURIComponent(likedCheck));
}