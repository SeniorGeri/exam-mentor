<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'Fusha :attribute duhet të pranohet.',
    'accepted_if' => 'Fusha :attribute duhet të pranohet kur :other është :value.',
    'active_url' => 'Fusha :attribute nuk është një URL e vlefshme.',
    'after' => 'Fusha :attribute duhet të jetë një datë pas :date.',
    'after_or_equal' => 'Fusha :attribute duhet të jetë një datë pas ose e barabartë me :date.',
    'alpha' => 'Fusha :attribute duhet të përmbajë vetëm shkronja.',
    'alpha_dash' => 'Fusha :attribute duhet të përmbajë vetëm shkronja, numra, viza dhe nënviza.',
    'alpha_num' => 'Fusha :attribute duhet të përmbajë vetëm shkronja dhe numra.',
    'any_of' => 'Fusha :attribute nuk është e vlefshme.',
    'array' => 'Fusha :attribute duhet të jetë një grup (array).',
    'ascii' => 'Fusha :attribute duhet të përmbajë vetëm karaktere alfanumerike me një bajt dhe simbole.',
    'before' => 'Fusha :attribute duhet të jetë një datë para :date.',
    'before_or_equal' => 'Fusha :attribute duhet të jetë një datë para ose e barabartë me :date.',
    'between' => [
        'array' => 'Fusha :attribute duhet të ketë ndërmjet :min dhe :max elementeve.',
        'file' => 'Fusha :attribute duhet të jetë ndërmjet :min dhe :max kilobajtëve.',
        'numeric' => 'Fusha :attribute duhet të jetë ndërmjet :min dhe :max.',
        'string' => 'Fusha :attribute duhet të ketë ndërmjet :min dhe :max karaktereve.',
    ],
    'boolean' => 'Fusha :attribute duhet të jetë e vërtetë ose e pavërtetë.',
    'can' => 'Fusha :attribute përmban një vlerë të paautorizuar.',
    'confirmed' => 'Konfirmimi i fushës :attribute nuk përputhet.',
    'contains' => 'Fushës :attribute i mungon një vlerë e kërkuar.',
    'current_password' => 'Fjalëkalimi është i pasaktë.',
    'date' => 'Fusha :attribute duhet të jetë një datë e vlefshme.',
    'date_equals' => 'Fusha :attribute duhet të jetë një datë e barabartë me :date.',
    'date_format' => 'Fusha :attribute duhet të përputhet me formatin :format.',
    'decimal' => 'Fusha :attribute duhet të ketë :decimal shifra pas presjes.',
    'declined' => 'Fusha :attribute duhet të refuzohet.',
    'declined_if' => 'Fusha :attribute duhet të refuzohet kur :other është :value.',
    'different' => 'Fusha :attribute dhe :other duhet të jenë të ndryshme.',
    'digits' => 'Fusha :attribute duhet të ketë :digits shifra.',
    'digits_between' => 'Fusha :attribute duhet të ketë ndërmjet :min dhe :max shifrave.',
    'dimensions' => 'Fusha :attribute ka dimensione imazhi të pavlefshme.',
    'distinct' => 'Fusha :attribute ka një vlerë të dyfishuar.',
    'doesnt_end_with' => 'Fusha :attribute nuk duhet të përfundojë me një nga këto: :values.',
    'doesnt_start_with' => 'Fusha :attribute nuk duhet të fillojë me një nga këto: :values.',
    'email' => 'Fusha :attribute duhet të jetë një adresë email-i e vlefshme.',
    'ends_with' => 'Fusha :attribute duhet të përfundojë me një nga këto: :values.',
    'enum' => ':attribute i zgjedhur është i pavlefshëm.',
    'exists' => ':attribute i zgjedhur është i pavlefshëm.',
    'extensions' => 'Fusha :attribute duhet të ketë një nga zgjatimet e mëposhtme: :values.',
    'file' => 'Fusha :attribute duhet të jetë një skedar.',
    'filled' => 'Fusha :attribute duhet të ketë një vlerë.',
    'gt' => [
        'array' => 'Fusha :attribute duhet të ketë më shumë se :value elemente.',
        'file' => 'Fusha :attribute duhet të jetë më e madhe se :value kilobajt.',
        'numeric' => 'Fusha :attribute duhet të jetë më e madhe se :value.',
        'string' => 'Fusha :attribute duhet të ketë më shumë se :value karaktere.',
    ],
    'gte' => [
        'array' => 'Fusha :attribute duhet të ketë :value elemente ose më shumë.',
        'file' => 'Fusha :attribute duhet të jetë më e madhe ose e barabartë me :value kilobajt.',
        'numeric' => 'Fusha :attribute duhet të jetë më e madhe ose e barabartë me :value.',
        'string' => 'Fusha :attribute duhet të ketë më shumë ose e barabartë me :value karaktere.',
    ],
    'hex_color' => 'Fusha :attribute duhet të jetë një ngjyrë heksadecimale e vlefshme.',
    'image' => 'Fusha :attribute duhet të jetë një imazh.',
    'in' => ':attribute i zgjedhur është i pavlefshëm.',
    'in_array' => 'Fusha :attribute duhet të ekzistojë në :other.',
    'integer' => 'Fusha :attribute duhet të jetë një numër i plotë.',
    'ip' => 'Fusha :attribute duhet të jetë një adresë IP e vlefshme.',
    'ipv4' => 'Fusha :attribute duhet të jetë një adresë IPv4 e vlefshme.',
    'ipv6' => 'Fusha :attribute duhet të jetë një adresë IPv6 e vlefshme.',
    'json' => 'Fusha :attribute duhet të jetë një stringë JSON e vlefshme.',
    'list' => 'Fusha :attribute duhet të jetë një listë.',
    'lowercase' => 'Fusha :attribute duhet të jetë me shkronja të vogla.',
    'lt' => [
        'array' => 'Fusha :attribute duhet të ketë më pak se :value elemente.',
        'file' => 'Fusha :attribute duhet të jetë më e vogël se :value kilobajt.',
        'numeric' => 'Fusha :attribute duhet të jetë më e vogël se :value.',
        'string' => 'Fusha :attribute duhet të ketë më pak se :value karaktere.',
    ],
    'lte' => [
        'array' => 'Fusha :attribute nuk duhet të ketë më shumë se :value elemente.',
        'file' => 'Fusha :attribute duhet të jetë më e vogël ose e barabartë me :value kilobajt.',
        'numeric' => 'Fusha :attribute duhet të jetë më e vogël ose e barabartë me :value.',
        'string' => 'Fusha :attribute duhet të ketë më pak ose e barabartë me :value karaktere.',
    ],
    'mac_address' => 'Fusha :attribute duhet të jetë një adresë MAC e vlefshme.',
    'max' => [
        'array' => 'Fusha :attribute nuk duhet të ketë më shumë se :max elemente.',
        'file' => 'Fusha :attribute nuk duhet të jetë më e madhe se :max kilobajt.',
        'numeric' => 'Fusha :attribute nuk duhet të jetë më e madhe se :max.',
        'string' => 'Fusha :attribute nuk duhet të ketë më shumë se :max karaktere.',
    ],
    'max_digits' => 'Fusha :attribute nuk duhet të ketë më shumë se :max shifra.',
    'mimes' => 'Fusha :attribute duhet të jetë një skedar i tipit: :values.',
    'mimetypes' => 'Fusha :attribute duhet të jetë një skedar i tipit: :values.',
    'min' => [
        'array' => 'Fusha :attribute duhet të ketë të paktën :min elemente.',
        'file' => 'Fusha :attribute duhet të jetë të paktën :min kilobajt.',
        'numeric' => 'Fusha :attribute duhet të jetë të paktën :min.',
        'string' => 'Fusha :attribute duhet të ketë të paktën :min karaktere.',
    ],
    'min_digits' => 'Fusha :attribute duhet të ketë të paktën :min shifra.',
    'missing' => 'Fusha :attribute duhet të mungojë.',
    'missing_if' => 'Fusha :attribute duhet të mungojë kur :other është :value.',
    'missing_unless' => 'Fusha :attribute duhet të mungojë nëse :other nuk është :value.',
    'missing_with' => 'Fusha :attribute duhet të mungojë kur :values është i pranishëm.',
    'missing_with_all' => 'Fusha :attribute duhet të mungojë kur të gjitha :values janë të pranishme.',
    'multiple_of' => 'Fusha :attribute duhet të jetë një shumëfish i :value.',
    'not_in' => ':attribute i zgjedhur është i pavlefshëm.',
    'not_regex' => 'Formati i fushës :attribute nuk është i vlefshëm.',
    'numeric' => 'Fusha :attribute duhet të jetë një numër.',
    'password' => [
        'letters' => 'Fusha :attribute duhet të përmbajë të paktën një shkronjë.',
        'mixed' => 'Fusha :attribute duhet të përmbajë të paktën një shkronjë të madhe dhe një të vogël.',
        'numbers' => 'Fusha :attribute duhet të përmbajë të paktën një numër.',
        'symbols' => 'Fusha :attribute duhet të përmbajë të paktën një simbol.',
        'uncompromised' => ':attribute i dhënë ka dalë në një rrjedhje të dhënash. Ju lutemi zgjidhni një :attribute tjetër.',
    ],
    'present' => 'Fusha :attribute duhet të jetë e pranishme.',
    'present_if' => 'Fusha :attribute duhet të jetë e pranishme kur :other është :value.',
    'present_unless' => 'Fusha :attribute duhet të jetë e pranishme nëse :other nuk është :value.',
    'present_with' => 'Fusha :attribute duhet të jetë e pranishme kur :values është i pranishëm.',
    'present_with_all' => 'Fusha :attribute duhet të jetë e pranishme kur të gjitha :values janë të pranishme.',
    'prohibited' => 'Fusha :attribute është e ndaluar.',
    'prohibited_if' => 'Fusha :attribute është e ndaluar kur :other është :value.',
    'prohibited_if_accepted' => 'Fusha :attribute është e ndaluar kur :other pranohet.',
    'prohibited_if_declined' => 'Fusha :attribute është e ndaluar kur :other refuzohet.',
    'prohibited_unless' => 'Fusha :attribute është e ndaluar nëse :other nuk është në :values.',
    'prohibits' => 'Fusha :attribute ndalon praninë e :other.',
    'regex' => 'Formati i fushës :attribute nuk është i vlefshëm.',
    'required' => 'Fusha :attribute është e kërkuar.',
    'required_array_keys' => 'Fusha :attribute duhet të përmbajë hyrje për: :values.',
    'required_if' => 'Fusha :attribute është e kërkuar kur :other është :value.',
    'required_if_accepted' => 'Fusha :attribute është e kërkuar kur :other pranohet.',
    'required_if_declined' => 'Fusha :attribute është e kërkuar kur :other refuzohet.',
    'required_unless' => 'Fusha :attribute është e kërkuar nëse :other nuk është në :values.',
    'required_with' => 'Fusha :attribute është e kërkuar kur :values është i pranishëm.',
    'required_with_all' => 'Fusha :attribute është e kërkuar kur të gjitha :values janë të pranishme.',
    'required_without' => 'Fusha :attribute është e kërkuar kur :values nuk është i pranishëm.',
    'required_without_all' => 'Fusha :attribute është e kërkuar kur asnjë nga :values nuk është i pranishëm.',
    'same' => 'Fusha :attribute duhet të përputhet me :other.',
    'size' => [
        'array' => 'Fusha :attribute duhet të përmbajë :size elemente.',
        'file' => 'Fusha :attribute duhet të jetë :size kilobajt.',
        'numeric' => 'Fusha :attribute duhet të jetë :size.',
        'string' => 'Fusha :attribute duhet të ketë :size karaktere.',
    ],
    'starts_with' => 'Fusha :attribute duhet të fillojë me një nga këto: :values.',
    'string' => 'Fusha :attribute duhet të jetë një stringë.',
    'timezone' => 'Fusha :attribute duhet të jetë një zonë orare e vlefshme.',
    'unique' => ':attribute është zënë tashmë.',
    'uploaded' => 'Ngarkimi i fushës :attribute dështoi.',
    'uppercase' => 'Fusha :attribute duhet të jetë me shkronja të mëdha.',
    'url' => 'Fusha :attribute duhet të jetë një URL e vlefshme.',
    'ulid' => 'Fusha :attribute duhet të jetë një ULID i vlefshëm.',
    'uuid' => 'Fusha :attribute duhet të jetë një UUID i vlefshëm.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'mesazh-personalizuar',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];