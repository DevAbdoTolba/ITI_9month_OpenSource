import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;





public class highestPopulatedCity {

    public static void main(String[] args) {
        CountryDao countryDao = InMemoryWorldDao.getInstance();
        
        class CountryPopulation {
            private String countryName;
            private int highestCityPopulation;

            public CountryPopulation(String countryName, int highestCityPopulation) {
                this.countryName = countryName;
                this.highestCityPopulation = highestCityPopulation;
            }

            public String getCountryName() {
                return countryName;
            }

            public int getHighestCityPopulation() {
                return highestCityPopulation;
            }

            @Override
            public String toString(){
                return getCountryName() + ": " + getHighestCityPopulation();
            }
        }

        List<CountryPopulation> countryPopulations = new ArrayList<>();


        countryDao.findAllCountries().stream()
        .map(
                country -> 
                new CountryPopulation(
                    country.getName(),
                    country.getCities().stream()
                    .mapToInt( city -> city.getPopulation() )
                    .max()
                    .orElse(0)
                )
        ).forEach(
            countryPopulation -> countryPopulations.add(countryPopulation)
        );

        for(CountryPopulation countryPopulation: countryPopulations){
            System.out.println(countryPopulation);
        }


        // countryDao.findAllCountries().stream()
        // .peek(country -> System.out.print(country.getName() + " : "))
        // .map(country -> 
        //     country.getCities().stream().mapToInt(
        //         city -> city.getPopulation()
        //     ).max().orElse(0)
        // ).forEach(
        //     highestPopulation -> System.out.println(highestPopulation)
        // );



    }
}