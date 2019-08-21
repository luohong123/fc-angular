/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-21 14:04:59
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fcmap.route';
import { FcmapbaiduComponent } from './fcmapbaidu/fcmapbaidu.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
  ],
  declarations: [
    FcmapbaiduComponent
  ],
  providers: []
})
export class FcmapModule { }
