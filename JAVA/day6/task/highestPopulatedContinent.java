import java.util.Comparator;
import java.util.Map;
import java.util.Optional;
import java.util.function.BiConsumer;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class highestPopulatedContinent {

    public static void main(String[] args) {
        CountryDao countryDao = InMemoryWorldDao.getInstance();

        countryDao.getAllContinents().stream()
                .peek(continent -> System.out.print(continent + " : "))
                .map(continent -> countryDao.findCountriesByContinent(continent).stream()
                        .flatMap(country -> country.getCities().stream())
                        .mapToInt(city -> city.getPopulation())
                        .max()
                        .orElse(0))
                .forEach(population -> System.out.println(population));
    }
}
