/**
 * Create	a	function	runningAverage()	that	returns	a	callable	function	object.	Update	the	
    series	with	each	given	value	and	calculate	the	current	average.
        rAvg(10)	=	10.0;
        rAvg(11)	=	10.5;
        rAvg(12)	=	11
 */

    function runningAverage() {
        let sum = 0;
        let inputs = 0;
        return (value) => {
            if (!value) {
                return console.info('Error');
            } else {
                sum += value;
                inputs++;
                return sum / inputs;
            }
        }
    }

    rAvg = runningAverage();
    console.log(rAvg());
    console.log(rAvg(10));
    console.log(rAvg(11));
    console.log(rAvg(12));