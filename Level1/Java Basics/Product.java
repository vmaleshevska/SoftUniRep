import java.math.BigDecimal;

public class Product {

	private BigDecimal price;
	private String item;

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		if (price.doubleValue() < 0) {
			throw new NullPointerException("Price cannot be negative");
		}
		this.price = price;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public int compare(Product product) {
		BigDecimal price = product.getPrice();
		if (this.price.doubleValue() > price.doubleValue()) {
			return 1;
		} else if (this.price.doubleValue() == price.doubleValue()) {
			return 0;
		} else {
			return -1;
		}
	}
}
