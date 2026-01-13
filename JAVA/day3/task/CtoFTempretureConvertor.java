import java.util.function.Function;

public class CtoFTempretureConvertor {
    public static void main(String[] args){
        Function<Double, Double> CentigradeToFahrenheitConvertor = new Function<Double, Double>() {
            @Override
            public Double apply(Double celsius) {
                return (celsius * (1.8)) + 32;
            }
        };

        Double resultInFahrenheit = CentigradeToFahrenheitConvertor.apply(65.50);
        System.out.println("Temperature in Fahrenheit: " + resultInFahrenheit);
    }
} 