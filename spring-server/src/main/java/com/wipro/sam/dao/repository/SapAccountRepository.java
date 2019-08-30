package com.wipro.sam.dao.repository;

import com.wipro.sam.dao.entities.SapAccounts;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Anton Kozlovskyi
 * @date 30 Aug 2019
 */
@Repository
public interface SapAccountRepository extends CrudRepository<SapAccounts, String> {

//    List<SapAccounts> getByBscsAccount(String bscsAccount);
}
