

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;





public class highestPopulatedCity {

    public static void main(String[] args) {
        CountryDao countryDao = InMemoryWorldDao.getInstance();
        
        countryDao.findAllCountries().stream().peek(country -> System.out.print(country.getName() + " : "))
        .mapToInt((country)-> country.getCities().stream().mapToInt(city -> city.getPopulation())
        .max().orElse(0)).forEach(res -> {System.out.println(res);});
        
    }
    // findAllCountries().stream().map((country)-> country.getPopulation()).max().getAsInt()

}