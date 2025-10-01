package br.com.monee.api.repository;

import br.com.monee.api.domain.transaction.category.TransactionCategoryEntity;
import br.com.monee.api.domain.transaction.category.TransactionCategoryResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TransactionCategoryRepository extends JpaRepository<TransactionCategoryEntity, UUID> {
    @Query("""
            SELECT 
                tc
            FROM
                TransactionCategoryEntity tc
            WHERE (
                :categoryTitle IS NULL OR 
                :categoryTitle = '' 
                OR LOWER(tc.title) LIKE LOWER(CONCAT('%', :categoryTitle, '%'))
            ) 
            AND (tc.user.id = :userId OR tc.user is NULL)
                
            """)
    Page<TransactionCategoryResponseDTO> findAllTransactionCategories(@Param("categoryTitle") String categoryTitle,
                                                                      @Param("userId") UUID userId,
                                                                      Pageable pageable);


}
