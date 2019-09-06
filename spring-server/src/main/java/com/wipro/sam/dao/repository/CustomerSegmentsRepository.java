package com.wipro.sam.dao.repository;

import com.wipro.sam.dao.entities.CustomerSegments;
import com.wipro.sam.dao.entities.SapAccounts;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Anton Kozlovskyi
 * @date 06 Sep 2019
 */
@Repository
public interface CustomerSegmentsRepository extends CrudRepository<CustomerSegments, String> {
}
