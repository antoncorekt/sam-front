package com.wipro.sam.dao.service;

import com.wipro.sam.dao.repository.SapAccountRepository;
import io.swagger.model.FinancialAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * @author Anton Kozlovskyi
 * @date 30 Aug 2019
 */
@Component
public class AccountService {

    private final SapAccountRepository sapAccountRepository;

    public AccountService(SapAccountRepository sapAccountRepository) {
        this.sapAccountRepository = sapAccountRepository;
    }

    public List<FinancialAccount> getAllBscsAccount(){

        return StreamSupport.stream(sapAccountRepository.findAll().spliterator(), false)
                            .map(sapAcc -> FinancialAccount.builder()
                                    .id(sapAcc.getBscsAccount())
                                    .status(FinancialAccount.StatusEnum.ACTIVE)
                                    .type(sapAcc.getDesc())
                                    .build())
                            .collect(Collectors.toList());

//        return null;
    }

}
