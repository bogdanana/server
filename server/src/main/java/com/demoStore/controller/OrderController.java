package com.demoStore.controller;

import com.demoStore.dto.OrderDto;
import com.demoStore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping
    public @ResponseBody
    OrderDto saveOrder(@RequestBody OrderDto orderDto){
        return orderService.createOrder(orderDto);
    }

    @GetMapping("/{id}")
    public @ResponseBody OrderDto getOrderById(Long id){
        return orderService.getOrderById(id);
    }

    @GetMapping
    public @ResponseBody
    List<OrderDto> getAllOrders(){
        return orderService.getAllOrders();
    }

}
