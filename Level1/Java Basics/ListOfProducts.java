/*Create a class Product to hold products, which have name (string) and price (decimal number). 
 * Read from a text file named "Input.txt" a list of products. Each product will be in format name + space + price. 
 * You should hold the products in objects of class Product. Sort the products by price and write them in format 
 * price + space + name in a file  named "Output.txt". Ensure you close correctly all used resources. */

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class ListOfProducts {
	public static void main(String[] args) throws FileNotFoundException {

		try (Scanner textFile = new Scanner(new File("src/Imput.txt"))) {
			ArrayList<Integer> productList = new ArrayList<Integer>();
			while (textFile.hasNextLine()){
				 Product product = new Product();
				 String[] read = textFile.nextLine().split(" ");
			}
			Collections.sort(productList);
		
			
			System.out.println(productList);
	        textFile.close();
	        
		} catch (IOException ioex) {
			System.err.println("Error");
			ioex.printStackTrace();
		}
		
	}
}
