import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SkeletonMockData {
    setNoOfSkeleton(number: number, skeleton: any[] = []) {
        for (const iterator of Array(number)) {
            skeleton.push({ skeleton: true })
        }
        return skeleton;
    }

    waiting(time=()=>{},duration=1000){
        setTimeout(() => {
            time()
        }, duration);
    }
}
