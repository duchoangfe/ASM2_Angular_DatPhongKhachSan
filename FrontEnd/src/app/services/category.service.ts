import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICate } from '../interfaces/Category';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    constructor(private http: HttpClient) {}
    getCategory(): Observable<ICate[]> {
        return this.http.get<ICate[]>(`http://localhost:8080/api/categories`);
    }

    getCategoryById(_id: number): Observable<ICate> {
        return this.http.get<ICate>(
            `http://localhost:8080/api/categories/${_id}`
        );
    }
    addCategory(category: ICate): Observable<ICate> {
        return this.http.post<ICate>(
            `http://localhost:8080/api/categories`,
            category
        );
    }
    updateCategory(category: ICate): Observable<ICate> {
        return this.http.put<ICate>(
            `http://localhost:8080/api/categories/${category._id}`,
            category
        );
    }
    deleteCategory(id: number): Observable<ICate> {
        return this.http.delete<ICate>(
            `http://localhost:8080/api/categories/${id}`
        );
    }
    relatedCategory(categoryId: number): Observable<any> {
        return this.http.get<any>(
            `http://localhost:8080/api/categories/${categoryId}?_embed=categories`
        );
    }
}
