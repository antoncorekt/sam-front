package com.wipro.sam.dao.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * @author Anton Kozlovskyi
 * @date 30 Aug 2019
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "SAP_ACCOUNTS")
public class SapAccounts {

    @Id
    @Column(name ="BSCS_ACCOUNT")
    private String bscsAccount;

    @Column(name ="BSCS_ACC_DES")
    private String desc;

    @Column(name ="VALID_FROM_DATE")
    private Date validFrom;



}

