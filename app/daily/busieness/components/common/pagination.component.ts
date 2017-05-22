import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import any = jasmine.any;
/**
 * Created by Administrator on 2017/5/21.
 */
@Component({
    moduleId: module.id,
    selector: 'daily-pagination',
    templateUrl: '../../views/common/pagination.html',
    styleUrls: ['../../styles/common/pagination.css'],
    providers: []
})
export class PaginationComponent implements OnChanges {
    ngOnChanges() {
        if (this.pageInfo) {
            this.initPage(this.pageInfo);
        }
    }

    @Input() pageInfo: any;
    pageable: any = {
        pageSize: 10,
        pageNumber: 0
    };
    @Output() pageSelect = new EventEmitter(this.pageable);

    page: any = {
        currentPage: 0,
        totalPage: 0,
        showPages: []
    };

    /**
     * 初始化分页
     * @param pageInfo 分页信息
     */
    private initPage(pageInfo: any) {
        this.page.currentPage = pageInfo.number;
        this.page.totalPage = pageInfo.totalPages;
        this.page.pageSize = pageInfo.size;
        this.pageable.pageNumber = pageInfo.number;
        this.pageable.pageSize = pageInfo.size;
        if (this.page.totalPage <= 10) {
            this.page.showPages = [];
            for (let i = 0; i < this.page.totalPage; i++) {
                this.page.showPages.push(i);
            }
        } else {
            this.page.showPages = [];
            let start = this.page.currentPage - 5;
            let end = this.page.currentPage + 5;
            if (start < 0) {
                for (let i = 0; i < 10; i++) {
                    this.page.showPages.push(i);
                }
            } else if (end > this.page.totalPage) {
                for (let i = this.page.totalPage - 10; i < this.page.totalPage; i++) {
                    this.page.showPages.push(i);
                }
            } else {
                for (let i = start; i < end; i++) {
                    this.page.showPages.push(i);
                }
            }
        }
    }

    /**
     * 选择页数点击事件
     */
    pageSelectClick(pageNumber: number) {
        this.pageable.pageNumber = pageNumber;
        this.pageSelect.emit(this.pageable);
        this.page.currentPage = pageNumber;
    }


}