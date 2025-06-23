<?php

declare(strict_types=1);

namespace Modules\Storage\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Storage\Models\Slider;
use Modules\Storage\Requests\Sliders\StoreSliderRequest;
use Modules\Storage\Requests\Sliders\UpdateSliderRequest;
use Inertia\Inertia;
use Inertia\Response;

final class SliderController
{

    /**
     * Return view to create sliders
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Storage::sliders/index');

    }

    /**
     * Load sliders
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $sliders = Slider::filter($request)->paginate($request->limit);

        return response()->json(['data' => $sliders]);
    }

    /**
     * Store new Slider
     *
     * @param  StoreSliderRequest $request
     * @return RedirectResponse
     */
    public function store(StoreSliderRequest $request): RedirectResponse
    {
        Slider::create($request->validated());

        return to_route('slider.list');
    }

    /**
     * Update Slider
     *
     * @param  UpdateSliderRequest $request
     * @param  Slider $slider
     * @return RedirectResponse
     */
    public function update(UpdateSliderRequest $request, Slider $slider): RedirectResponse
    {
        $slider->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('slider.list');
    }

    /**
     * Delete Slider
     *
     * @param  Slider $slider
     * @return RedirectResponse
     */
    public function destroy(Slider $slider): RedirectResponse
    {
        $slider->delete();

        return to_route('slider.list');
    }
}
