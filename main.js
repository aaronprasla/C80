name_of_the_student_array = [];
function submit(){
    var display_student_array = [];
    for(var i = 1; i <= 4; i++){
        var student_name = document.getElementById("name_of_the_student_" + i).value;
        console.log(student_name);
        name_of_the_student_array.push(student_name);
    }
    var length_student = name_of_the_student_array.length;
    for(var j = 0; j < length_student; j++){
        display_student_array.push("<h4> NAME - " + name_of_the_student_array[j] + "</h4>")
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join("*");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}