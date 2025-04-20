// Lấy phần tử ô input và vùng chứa danh sách
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Hàm thêm công việc mới
function addTask(){
    // Kiểm tra nếu ô input trống thì cảnh báo
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
         // Tạo thẻ <li> mới và thêm vào danh sách
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Tạo nút x (dấu x để xóa) cho mỗi công việc
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";// Xóa nội dung ô input sau khi thêm
    saveData();// Lưu danh sách vào localStorage
}

// Thêm sự kiện click cho danh sách công việc
listContainer,addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        // Nếu click vào mục <li>, đánh dấu đã hoàn thành
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        // Nếu click vào dấu "x", xóa mục công việc
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Lưu danh sách vào localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Hiển thị công việc đã lưu khi tải lại trang
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// Thêm sự kiện nhấn Enter để gọi hàm addTask
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

showTask();// Gọi hàm khi bắt đầu