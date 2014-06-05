import java.util.Scanner;

/*Write a method to convert from degrees to radians. 
 * Write a method to convert from radians to degrees. 
 * You are given a number n and n queries for conversion. 
 * Each conversion query will consist of a number + space + measure. 
 * Measures are "deg" and "rad". 
 * Convert all radians to degrees and all degrees to radians. 
 * Print the results as n lines, each holding a number + space + measure. 
 * Format all numbers with 6 digit after the decimal point.  */


public class AngleUnitConverter {


	public static double convertRadToDeg(double radians) {
		// degrees = radians * (180/π)
		return (radians * (180 / Math.PI));
	}

	public static double convertDegToRad(double degrees) {
		// radians = degrees * (π/180)

		return (degrees * (Math.PI / 180));
	}
	
	public static void convert(){
		
		String spaceReg = "\\s+";
		String space =" ";
		String radian = "rad";
		String degree = "deg";
		
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter number of measurments: ");
		int count = scan.nextInt();
		scan.nextLine();
		
		StringBuffer buffer = new StringBuffer();
		for(int i=0; i<count; i++){
			String line = scan.nextLine();
			String[] words = line.split(spaceReg);
			if(words.length!=2){
				throw new IllegalArgumentException("Wrong format. The entered string must be in the form number+space+measure");
			}
			double number = Double.parseDouble(words[0]);
			String measure = words[1];
			if(radian.equals(measure)){
				double deg = convertRadToDeg(number);
				buffer.append(deg+space+degree);
			}
			else if(degree.equals(measure)){
				double rad = convertDegToRad(number);
				buffer.append(rad+space+radian);
			}
			else{
				throw new IllegalArgumentException("Unrecognized measure "+measure);
			}
			buffer.append("\n");
		}
		
		System.out.println(buffer.toString());
	}
	
	
	public static void main(String[] args){
		
		convert();
	}
}
