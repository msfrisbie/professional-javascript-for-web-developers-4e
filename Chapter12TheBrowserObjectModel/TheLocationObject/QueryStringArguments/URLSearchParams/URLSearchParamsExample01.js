let qs = "?q=javascript&num=10";

let searchParams = new URLSearchParams(qs);

alert(searchParams.toString());  // " q=javascript&num=10"
searchParams.has("num");         // true
searchParams.get("num");         // 10

searchParams.set("page", "3");
alert(searchParams.toString());  // " q=javascript&num=10&page=3"

searchParams.delete("q");
alert(searchParams.toString());  // " num=10&page=3"
