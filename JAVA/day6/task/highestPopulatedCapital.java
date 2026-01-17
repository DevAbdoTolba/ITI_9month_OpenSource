



import java.util.Objects;
import java.util.Optional;

import static java.lang.System.out;
import static java.util.Comparator.comparing;
import static java.util.stream.Collectors.maxBy;

public class highestPopulatedCapital {

    public static void main(String[] args) {
        CountryDao countryDao = InMemoryWorldDao.getInstance();
        CityDao cityDao = InMemoryWorldDao.getInstance();

        System.out.println(
            countryDao.findAllCountries().stream()
            .flatMap(
            country -> country.getCities().stream()
            .filter(city -> city.getId() == country.getCapital())
            )
            .mapToInt(city -> city.getPopulation())
            .max()
            .orElse(0)
        );
    }

}