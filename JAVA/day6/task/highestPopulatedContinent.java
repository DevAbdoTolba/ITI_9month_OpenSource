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
                .map(continent -> countryDao.findCountriesByContinent(continent).stream()
                        .flatMap(country -> country.getCities().stream())
                        .reduce((c1, c2) -> c1.getPopulation() > c2.getPopulation() ? c1 : c2)
                        .orElse(null))
                .filter(city -> city != null)
                .forEach(city -> {
                    Country country = countryDao.findCountryByCode(city.getCountryCode());
                    System.out.println(country.getContinent() + city);
                });
    }
}
