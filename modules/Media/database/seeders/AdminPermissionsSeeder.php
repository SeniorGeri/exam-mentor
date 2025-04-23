<?php

namespace Modules\Media\database\seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

final class AdminPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = Role::findByName('admin');

        // Media
        $role->givePermissionTo('media.view');
        $role->givePermissionTo('media.store');
        $role->givePermissionTo('media.update');
        $role->givePermissionTo('media.delete');

    }
}
