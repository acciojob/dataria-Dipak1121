//your JS code here. If required.
let arr1 = [3, 7, 12, 20];
let arr2 = [1, 5, 8, 18, 25];
let ans = [];
while(arr1.length > 0 || arr2.length > 0){
	while(arr1.length > 0 && arr2.length > 0){
		if(arr1[0] < arr2[0]){
			ans.push(arr1[0].shift());
		}
		else{
			ans.push(arr2[0].shift());
		}
	}

	if( arr1.length > 0 ){
		while(arr1.length > 0){
			ans.push(arr1[0].shift());
		}
	}
	else{
		while(arr2.length > 0){
			ans.push(arr2[0].shift());
		}
	}
}