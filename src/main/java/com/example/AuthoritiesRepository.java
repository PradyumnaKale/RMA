
package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "authorities", path = "authorities")
public interface AuthoritiesRepository extends PagingAndSortingRepository<Authorities, String> {

	// List<Subject> findByLastName(@Param("name") String name);

}
