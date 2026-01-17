
import java.util.Objects;
import java.util.Optional;

import static java.lang.System.out;

public class highestPopulatedCapital {

    public static void main(String[] args) {
        CountryDao countryDao = InMemoryWorldDao.getInstance();

        countryDao.findAllCountries().stream()
                .map(country -> 
                        country.getCities().stream()
                        .filter(city -> city.getId() == country.getCapital())
                        .findFirst()
                        .orElse(null)
                ).filter(city -> city != null)
                .reduce((city1, city2) -> city1.getPopulation() > city2.getPopulation() ? city1 : city2)
                .ifPresent(city -> System.out.println(city));

    }

}