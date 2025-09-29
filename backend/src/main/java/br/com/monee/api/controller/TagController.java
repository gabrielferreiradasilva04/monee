package br.com.monee.api.controller;

import br.com.monee.api.domain.transaction.tag.TagDTO;
import br.com.monee.api.service.TagService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/tags")
public class TagController {

    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @PostMapping("/{userId}")
    public ResponseEntity<TagDTO> save(@PathVariable UUID userId, @RequestBody @Valid TagDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.tagService.saveUserTag(dto, userId));
    }
}
